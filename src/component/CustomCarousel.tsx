import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@material-tailwind/react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowDownCircleIcon, ArrowUpCircleIcon} from '@heroicons/react/24/outline';
import { setAttachments, removeFile } from '../store/fileSlice';  // 파일 삭제 액션 추가
import { useFileUpload } from '../hooks/useFileUpload';

const CustomCarousel = () => {
    const [slides, setSlides] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDefaultView, setIsDefaultView] = useState(true); // 기본 화면 여부
    const dispatch = useDispatch();
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const { uploadFile, isUploading, attachmentDTO } = useFileUpload();

    useEffect(() => {
        if (attachmentDTO) {
            dispatch(setAttachments(attachmentDTO));  // 서버에서 반환된 AttachmentDTO[] 저장
            setSlides(attachmentDTO.map((file:unknown) => {
                if()
                file.imageFullPath || file.fileUrl
            }));  // 이미지 경로 추가
            setIsDefaultView(false);  // 업로드가 완료되면 기본 화면 종료
        }
    }, [attachmentDTO, dispatch]);

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            Array.from(selectedFiles).forEach((file) => handleUpload(file));
        }
    };

    const handleUpload = async (file: File) => {
        await uploadFile(file, '/upload/compressed', '/upload/original');
    };

    const handleClickUpload = () => {
        fileInputRef.current?.click();
    };

    const handleDelete = () => {
        if (slides.length > 0) {
            dispatch(removeFile(activeIndex));  // 선택한 슬라이드 이미지 삭제
            setSlides(slides.filter((_, i) => i !== activeIndex));
            setActiveIndex(0);  // 삭제 후 첫 번째 슬라이드로 이동
        }
    };

    return (
        <div className="relative w-full max-w-lg mx-auto p-6">
            <div
                className={`border-2 border-dashed w-full h-64 text-center flex items-center justify-center mb-4 ${slides.length === 0 ? 'bg-gray-200' : 'bg-white'}`}
            >
                {isDefaultView ? (
                    // 기본 드래그 앤 드롭 메시지
                    <div id="drop-area" style={{ width: '100%' }}>
                        <p>이미지를 드래그 앤 드롭 하거나 클릭하여 업로드하세요.</p>
                    </div>
                ) : (
                    // 이미지가 업로드되면 캐러셀로 보여줌
                    <img src={slides[activeIndex]} alt={`slide-${activeIndex}`} className="object-cover w-full h-full" />
                )}
            </div>

            <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
            />

            {/* 슬라이드 전환 및 이미지 관리 버튼들 */}
            {slides.length > 0 && (
                <div className="flex justify-between items-center mt-4">
                    {/* 왼쪽 슬라이드 버튼 */}
                    <IconButton variant="outlined" color="blue" onClick={prevSlide} disabled={slides.length <= 1}
                                children={undefined} placeholder={undefined} onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                        <ArrowLeftCircleIcon className="w-6 h-6" />
                    </IconButton>

                    {/* 업로드 버튼 */}
                    <IconButton variant="outlined" color="green" onClick={handleClickUpload} disabled={isUploading}>
                        <ArrowUpCircleIcon className="w-6 h-6" />
                    </IconButton>

                    {/* 오른쪽 슬라이드 버튼 */}
                    <IconButton variant="outlined" color="blue" onClick={nextSlide} disabled={slides.length <= 1}>
                        <ArrowRightCircleIcon className="w-6 h-6" />
                    </IconButton>

                    {/* 이미지 삭제 버튼 */}
                    <IconButton variant="outlined" color="red" onClick={handleDelete} disabled={slides.length === 0}>
                        <ArrowDownCircleIcon className="w-6 h-6" />
                    </IconButton>
                </div>
            )}

            {/* 업로드 중 메시지 */}
            {isUploading && <p className="text-center mt-4">업로드 중...</p>}
        </div>
    );
};

export default CustomCarousel;
