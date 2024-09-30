import { SidebarLight } from "../component/SidebarLight";


// @ts-ignore
const SidebarLayout = ({children}) => {
    return (

        <div className={"grid grid-flow-col"}>
            <SidebarLight/>
            <div className={"col-start-5"}>
                {children}
            </div>
        </div>
    )
}

export default SidebarLayout;