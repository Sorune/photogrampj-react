import {SidebarLight} from "../layouts/SidebarLight.tsx";
import ImageCellLayout from "../component/ImageCellLayout.tsx";

const TestPage = ()=>{
    return (
        <div className={"grid grid-flow-col m-4 gap-2"}>
            <SidebarLight/>
            <div className={"col-start-5"}>
                <ImageCellLayout />
            </div>
        </div>
    )
}

export default TestPage;
