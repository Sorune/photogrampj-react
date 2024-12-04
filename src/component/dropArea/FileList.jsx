import FileItem from "./FileItem";

const FileList = ({ files, removeFile }) => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-6">
            {files.map((file, index) => (
                <FileItem key={index} file={file} index={index} removeFile={removeFile} />
            ))}
        </div>
    );
};

export default FileList;