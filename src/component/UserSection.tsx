import { Card } from "@material-tailwind/react";
import UnknownUserImage from "../assets/UnknownUser.png"; // 이미지 경로는 설정된 별칭을 사용

export function UserSection() {
    return (
        <div className="w-full relative p-4">
            <div className="absolute flex w-full h-full items-center justify-center">
                <div
                    className="
            rounded-full
            bg-gray-400
            h-14 w-14  /* 기본 크기: 96px */
            md:h-28 md:w-28  /* 중간 화면 이상에서는 128px */
            lg:h-48 lg:w-48  /* 큰 화면 이상에서는 192px */
            bg-cover bg-center
            z-50"
                    style={{ backgroundImage: `url(${UnknownUserImage})` }}
                ></div>
            </div>
            <Card className="w-full aspect-[100/20] bg-black" />
            <Card className="w-full aspect-[100/15]" />
        </div>
    );
}
