import {useNavigate} from "react-router-dom";

const useAuth = ()=>{
    const navigate = useNavigate();

    const goToLogin = ()=>{
        navigate('/login')
    }

    const goToRegister = ()=>{
        navigate('/register')
    }

    const goToLogout = ()=>{
        navigate('/')
    }

    return {goToLogin,goToRegister,goToLogout}
}

export default useAuth;
