

const DropArea = ({ fileInputRef, handleFileChange }) => {
    return (
        <div
            className="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer"
            style={{
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input
                type="file"
                ref={fileInputRef}
                multiple
                accept="*"
                className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                onChange={handleFileChange}
            />
            <div className="flex flex-col items-center justify-center py-10 text-center">
                <svg
                    className="w-6 h-6 mr-1 text-current-50"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
                <p className="m-0">Drag your files here or click in this area.</p>
            </div>
        </div>
    );
};

export default DropArea;