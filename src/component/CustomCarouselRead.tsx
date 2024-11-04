import React, {useEffect, useState} from 'react';
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "@heroicons/react/24/outline";

const CustomCarousel = ({
                            children: slides,
                            autoSlide = false,
                            autoSlideInterval = 3000,
                            vertical = false // vertical을 props로 받고, 기본값을 false로 설정합니다.
                        }) => {
    const [curr, setCurr] = useState(0);
    const prevVertical = () => setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));  // Placeholder function
    const nextVertical = () => setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));  // Placeholder function
    //const prevHorizontal = () => setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
    //const nextHorizontal = () => setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));


    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(nextVertical, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [curr, nextVertical, autoSlide, autoSlideInterval]);

    const transformStyle = vertical ? { transform: `translateY(-${curr * 100}%)` } : { transform: `translateX(-${curr * 100}%)` };

    return (
        <div>
            {/* <div className='overflow-hidden relative'>
                <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {slides}
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <ArrowLeftCircleIcon />
                    </button>
                    <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <ArrowRightCircleIcon />
                    </button>
                </div>
                <div className='absolute bottom-4 right-0 left-0'>
                    <div className='flex items-center justify-center gap-2'>
                        {slides.map((s, i) => (
                            <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                        ))}
                    </div>
                </div>
            </div> */}
            <div className='overflow-hidden relative'>
                <div className='flex transition-transform ease-out duration-500' style={transformStyle}>
                    {slides}
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                    <button onClick={prevVertical} className='p-2 rounded-full shadow text-white'>
                        <ArrowLeftCircleIcon className="h-8 w-8" />
                    </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <button onClick={nextVertical} className='p-2 rounded-full shadow text-white'>
                        <ArrowRightCircleIcon className="h-8 w-8" />
                    </button>
                </div>
                <div className='absolute bottom-4 right-0 left-0'>
                    <div className='flex items-center justify-center gap-2'>
                        {slides.map((s, i) => (
                            <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CustomCarousel