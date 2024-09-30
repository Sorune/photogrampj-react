import SectionTitle from "../component/SectionTitle.tsx";
import Filter from "../component/Filter.tsx";
import React, {useState} from "react";
import {MasonryGridGallery} from "../component/MasonryGridGallery.tsx";
import {UserSection} from "../component/UserSection.tsx";

interface ImageCellSectionData {
    imagePath: string;
    title: string;
    category: string;
    link: string;
}

const ImageCellLayout: React.FC  = () => {

    const filters: string[] = ['All', 'App', 'Card', 'Web'];
    const [activeFilter, setActiveFilter] = useState<string>('All');

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

    return(
        <div className={"grid gap-4 justify-items-center p-4"}>
            <UserSection />
            <Filter filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
            <MasonryGridGallery imageCellSectionData={imageCards} activeFilter={activeFilter}/>
        </div>
    );
};

export default ImageCellLayout;
