import 'aos/dist/aos.css';
import './imageCell.css';

import ImageCellBS from "./ImageCellBS.tsx";
import FilterBS from "./FilterBS.tsx";
import SectionTitle from "./SectionTitle.tsx";

import React, {useEffect, useState} from "react";
import {Masonry} from "@mui/lab";
import AOS from "aos";

interface ImageCellSectionData {
    imagePath: string;
    title: string;
    category: string;
    link: string;
}

const ImageCellSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const filters: string[] = ['All', 'App', 'Card', 'Web'];
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,  // 애니메이션이 한 번만 실행되도록 설정
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [activeFilter]);

    const imageCards: ImageCellSectionData[] = [
        { imagePath: 'src/assets/portfolio/portfolio-1.jpg', title: 'App 1', category: 'App', link: '/photos/imgcell-details' },
        { imagePath: 'src/assets/portfolio/portfolio-2.jpg', title: 'Web 1', category: 'Web', link: '/photos/imgcell-details' },
        { imagePath: 'src/assets/portfolio/portfolio-3.jpg', title: 'App 2', category: 'App', link: '/photos/imgcell-details' },
        { imagePath: 'src/assets/portfolio/portfolio-4.jpg', title: 'Card 1', category: 'Card', link: '/photos/imgcell-details' },
        { imagePath: 'src/assets/portfolio/portfolio-5.jpg', title: 'Web 2', category: 'Web', link: '/photos/imgcell-details' },
        { imagePath: 'src/assets/portfolio/portfolio-6.jpg', title: 'App 3', category: 'App', link: '/photos/imgcell-details' },
        { imagePath: 'src/assets/portfolio/portfolio-7.jpg', title: 'Card 2', category: 'Card', link: '/photos/imgcell-details' },
        { imagePath: 'src/assets/portfolio/portfolio-8.jpg', title: 'Card 3', category: 'Card', link: '/photos/imgcell-details' },
        { imagePath: 'src/assets/portfolio/portfolio-9.jpg', title: 'Web 3', category: 'Web', link: '/photos/imgcell-details' },
    ];

    return (
        <section className="imgcell relative" >
            <div className="container">
                <SectionTitle title="imgcell" subtitle="Check our imgcell" />

                <FilterBS filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

                <Masonry columns={{xs:2, md:3}} spacing={2} data-aos="fade-up" data-aos-delay="200">
                    {imageCards
                        .filter(card => activeFilter === 'All' || card.category.toLowerCase() === activeFilter.toLowerCase())
                        .map((card, index) => (
                            <ImageCellBS key={index} {...card} />
                        ))}
                </Masonry>
            </div>
        </section>
    );
};

export default ImageCellSection;
