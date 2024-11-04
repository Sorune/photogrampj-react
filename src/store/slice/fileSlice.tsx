import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HashTag {
    id: number;
    tagName: string;
    tagValue: string;
}

interface AttachmentDTO {
    id: number;
    fileName: string;
    fileUrl: string;
    imageFullPath?: string;  // 이미지의 경우
    tags: HashTag[];     // HashTag 정보 포함
}

interface FileState {
    attachments: AttachmentDTO[];
}

interface FileUploadState {
    isUploading: boolean;
    progress: number;
    error: string | null;
}

// 통합된 상태
interface CombinedState {
    fileUpload: FileUploadState;
    files: FileState;
}

// 초기 상태 정의
const initialState: CombinedState = {
    fileUpload: {
        isUploading: false,
        progress: 0,
        error: null,
    },
    files: {
        attachments: []
    }
};

const fileSlice = createSlice({
    name: 'fileUpload',
    initialState,
    reducers: {
        // 파일 업로드 상태 관리 리듀서
        setUploading(state, action: PayloadAction<boolean>) {
            state.fileUpload.isUploading = action.payload;
        },
        setProgress(state, action: PayloadAction<number>) {
            state.fileUpload.progress = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.fileUpload.error = action.payload;
        },
        resetUploadState(state) {
            state.fileUpload.isUploading = false;
            state.fileUpload.progress = 0;
            state.fileUpload.error = null;
        },

        // 파일 리스트 및 해시태그 관리 리듀서
        setAttachments(state, action: PayloadAction<AttachmentDTO[]>) {
            state.files.attachments = action.payload;
        },
        removeFile(state, action: PayloadAction<number>) {
            state.files.attachments = state.files.attachments.filter((_, index) => index !== action.payload);
        },
        clearAttachments(state) {
            state.files.attachments = [];
        }
    },
});

export const {
    setUploading,
    setProgress,
    setError,
    resetUploadState,
    setAttachments,
    removeFile,
    clearAttachments,
} = fileSlice.actions;

export default fileSlice.reducer;
