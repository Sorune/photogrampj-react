import {SidebarLight} from "../layouts/SidebarLight.tsx";
import ImageCellLayout from "../layouts/ImageCellLayout.tsx";


const MainPage = ()=>{
    return(
        <div className={"grid grid-flow-col"}>
            <SidebarLight/>
            <div className={"col-start-5"}>
                <ImageCellLayout />
            </div>
        </div>
    )
}

export default MainPage;
