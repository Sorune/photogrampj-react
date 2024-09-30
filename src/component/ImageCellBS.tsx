import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './imageCell.css'

import {BiLink, BiPlus} from "react-icons/bi";

interface ImageCellProps {
    imagePath: string;
    title: string;
    category: string;
    link : string;
}

const ImageCellBS:React.FC<ImageCellProps> = ({imagePath,title, category, link})=>{

    return (

        <div className={`col-lg-4 col-md-6 imgcell-item filter-${category}`}>
            <div className="imgcell-wrap">
                <img src={imagePath} className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110" alt={title}/>
                <div className="imgcell-info">
                    <h4 className="text-white text-xl">{title}</h4>
                    <p className="text-gray-300 italic">{category}</p>
                    <div className="imgcell-links">
                        <a href={imagePath} className="mr-2">
                            <BiPlus size={28}/>
                        </a>
                        <a href={link}>
                            <BiLink size={28}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCellBS;
