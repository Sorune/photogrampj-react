import {Suspense,lazy} from "react";
import {createBrowserRouter} from "react-router-dom";


const Main = lazy(()=>import("../pages/MainPage.tsx"));
const Test = lazy(()=>import("../pages/TestPage.tsx"))

const root = createBrowserRouter([
    {
      path: "/",
        element:<Suspense ><Main /></Suspense>,
    },{
    path:"/test",
        element:<Suspense><Test/></Suspense>
    }
])

export default root;
