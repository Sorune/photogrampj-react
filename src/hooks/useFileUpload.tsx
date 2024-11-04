import {useAppDispatch, useAppSelector} from '../utils/reduxUtil.tsx';
import {resetState, setError, setOriginalUploaded, setProgress, setUploadedUrl, setUploading} from '../store/slice/fileSlice.tsx';
import axios, {AxiosError} from 'axios';
import imageCompression from 'browser-image-compression';
import {toast} from 'react-toastify';

export const useFileUpload = () => {
    const dispatch = useAppDispatch();
    const { isUploading, progress, uploadedUrl, error, originalUploaded } = useAppSelector(
        (state) => state.fileUpload // RootState에서 fileUpload 상태 가져오기
    );

    const storeInLocalStorage = (file: File): void => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result) {
                localStorage.setItem('originalImage', reader.result as string);
            }
        };
        reader.readAsDataURL(file);
    };

    const removeFromLocalStorage = () => {
        localStorage.removeItem('originalImage');
    };

    const uploadFile = async (
        file: File,
        uploadUrl: string,
        originalUploadUrl: string,
        isBackground = false
    ): Promise<void> => {
        const isImage = file.type.startsWith('image/');
        let fileToUpload = file;

        if (isImage && file.size > 10 * 1024 * 1024) {
            try {
                const options = {
                    maxSizeMB: 10,
                    maxWidthOrHeight: 1920,
                    useWebWorker: true,
                };
                fileToUpload = await imageCompression(file, options);
                storeInLocalStorage(file);

                toast.info('Image compressed and ready for upload.', { autoClose: 2000 });
            } catch (compressionError) {
                if (compressionError instanceof Error) {
                    dispatch(setError(compressionError.message));
                } else {
                    dispatch(setError('Unknown error during image compression'));
                }
                dispatch(resetState());
                return;
            }
        }

        dispatch(setUploading(true));
        dispatch(setProgress(0));
        dispatch(setError(null));

        try {
            const response = await axios.post(uploadUrl, fileToUpload, {
                onUploadProgress: (progressEvent) => {
                    const total = progressEvent.total || 1;
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / total);
                    dispatch(setProgress(percentCompleted));

                    if (!isBackground) {
                        toast.info(`Uploading... ${percentCompleted}%`, { autoClose: false });
                    }
                },
            });

            dispatch(setUploadedUrl(response.data.url));

            if (!isBackground) {
                toast.success('Compressed image upload successful!', { autoClose: 3000 });
            }

            if (isImage && file.size > 10 * 1024 * 1024) {
                setTimeout(async () => {
                    const originalFile = localStorage.getItem('originalImage');
                    if (originalFile) {
                        const blob = await fetch(originalFile).then((res) => res.blob());
                        const originalResponse = await axios.post(originalUploadUrl, blob);
                        if (originalResponse.status === 200) {
                            dispatch(setOriginalUploaded(true));
                            toast.info('Original image uploaded and replaced.', { autoClose: 3000 });
                            removeFromLocalStorage(); // 로컬 스토리지에서 파일 삭제
                        }
                    }
                }, 5000);
            }

        } catch (err) {
            const errorMessage = (err as AxiosError).message || 'Upload failed';
            dispatch(setError(errorMessage));

            if (!isBackground) {
                toast.error(`Upload failed: ${errorMessage}`, { autoClose: 5000 });
            }

        } finally {
            dispatch(setUploading(false));
            dispatch(resetState());
            removeFromLocalStorage(); // 업로드가 완료되면 로컬 스토리지에서 파일 삭제
        }
    };

    return { isUploading, progress, uploadedUrl, error, originalUploaded, uploadFile };
};
