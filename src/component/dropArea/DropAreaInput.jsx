import { useState, useRef } from "react";
import DropArea from "./DropArea.jsx";
import FileList from "./FileList.jsx";

const DropAreaInput = () => {
    const [files, setFiles] = useState([]); // 파일 리스트
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        event.target.value = ""; // input 초기화
    };

    const removeFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-white p-7 rounded w-9/12 mx-auto">
            {/* 드래그 앤 드롭 영역 */}
            <DropArea fileInputRef={fileInputRef} handleFileChange={handleFileChange} />

            {/* 파일 리스트 */}
            <FileList files={files} removeFile={removeFile} />
        </div>
    );
};

export default DropAreaInput;