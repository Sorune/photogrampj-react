import ImageCellSection from "../component/ImageCellSection.tsx";
import {SidebarLight} from "../layouts/SidebarLight.tsx";


const MainPage = ()=>{
    return(
        <div className={"grid grid-flow-col"}>
            <SidebarLight/>
            <div className={"col-start-5"}>
                <ImageCellSection />
            </div>
        </div>
    )
}

export default MainPage;
