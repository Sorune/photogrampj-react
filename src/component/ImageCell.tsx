import { useState } from "react";
import { BiPlus, BiLink } from "react-icons/bi";

export function ImageCellItem({ imagePath, title, category, link }) {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지 로드 완료 시 실행되는 핸들러
    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className={`imgcell-item filter-${category} relative h-auto ${isLoaded ? "animate-fadeIn" : "opacity-0"}`}>
            {/* 이미지 래퍼에 relative 추가 */}
            <div className="relative imgcell-wrap group h-auto">
                {/* 이미지에 흐림 효과와 호버 시 변형 추가 */}
                <img
                    src={imagePath}
                    className="w-full h-auto transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:opacity-90"
                    alt={title}
                    onLoad={handleImageLoad}  // 이미지 로드 시 실행
                />
                {/* .imgcell-info 기본적으로 숨김 -> 호버 시 나타남 */}
                <div className="absolute inset-0 bottom-0 flex flex-col justify-end items-center content-end bg-gray-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 imgcell-info">
                    <h4 className="text-white text-xl h-[10%]">{title}</h4>
                    <p className="text-gray-300 italic h-[10%]">{category}</p>
                    <div className="imgcell-links flex space-x-2 mt-2 w-full h-[40%]">
                        <div className={"flex w-full justify-between m-2 items-end"}>
                            <div className={"flex"}>
                                <a href={imagePath}>
                                    <BiPlus size={28} className="text-white" />
                                </a>
                                <a href={link}>
                                    <BiLink size={28} className="text-white" />
                                </a>
                            </div>
                            <div className={"flex"}>
                                <a href={imagePath}>
                                    <BiPlus size={28} className="text-white" />
                                </a>
                                <a href={link}>
                                    <BiLink size={28} className="text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
