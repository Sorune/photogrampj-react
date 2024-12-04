
const FileItem = ({ file, index, removeFile }) => {
    const humanFileSize = (size) => {
        const i = Math.floor(Math.log(size) / Math.log(1024));
        return (
            (size / Math.pow(1024, i)).toFixed(2) +
            " " +
            ["B", "kB", "MB", "GB", "TB"][i]
        );
    };

    const loadFile = (file) => {
        return URL.createObjectURL(file);
    };

    return (
        <div
            className="relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border rounded cursor-move select-none"
            style={{ paddingTop: "100%" }}
        >
            <button
                className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                type="button"
                onClick={() => removeFile(index)}
            >
                <svg
                    className="w-4 h-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </button>
            {file.type.includes("image/") && (
                <img
                    className="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white preview"
                    src={loadFile(file)}
                    alt={file.name}
                />
            )}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-white bg-opacity-50">
                <span className="w-full font-bold text-gray-900 truncate">
                    {file.name}
                </span>
                <span className="text-xs text-gray-900">
                    {humanFileSize(file.size)}
                </span>
            </div>
        </div>
    );
};

export default FileItem;