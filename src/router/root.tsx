import {Suspense,lazy} from "react";
import {createBrowserRouter} from "react-router-dom";
import Spin from "../pages/error/Spin.tsx";

const Loading = Spin
const NotFound = lazy(()=>import("../pages/error/404NotFound.tsx"))
const Main = lazy(()=>import("../pages/MainPage.tsx"));
const Test = lazy(()=>import("../pages/TestPage.tsx"))
const Login = lazy(()=>import("../pages/auth/LoginPage.tsx"))
const Register = lazy(()=>import("../pages/auth/RegisterPage.tsx"))

const root = createBrowserRouter([
    {
        element: <Suspense fallback={Loading}><Main/></Suspense>,
        errorElement: NotFound,
        path: "/",
    },{
        path:"/test",
        element:<Suspense><Test/></Suspense>
    },{
        path:"/login",
        element:<Suspense><Login/></Suspense>,
    },{
        path:"/register",
        element:<Suspense><Register/></Suspense>
    }
])

export default root;
