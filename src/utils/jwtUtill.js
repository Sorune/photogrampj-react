import axios from "axios";
import {API_SERVER_HOST} from "../api/filesApi";
import {getCookie, setCookie} from "./cookieUtill";


const jwtAxios = axios.create()

const refreshJWT = async (accessToken, refreshToken) =>{
    const host = API_SERVER_HOST
    const header = {headers:{"Authorization":`Bearer ${accessToken}`}}

    const res = await axios.post(`${host}/api/member/refresh?refreshToken=${refreshToken}`,header)

    return res.data
}

const beforeReq = (config) =>{
    const tokenInfo = getCookie("token")

    if(!tokenInfo){
        console.log("Token Not Found")
        return Promise.reject({
            response:{
                data:
                    {error:"REQUIRE_LOGIN"}
            }
        })
    }
    const {accessToken} = tokenInfo
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
}

const beforeRes = async (res) =>{
    console.log(res);
    const data = res.data;
    if(data&&data.error === 'ERROR_ACCESS_TOKEN'){
        const memberCookieValue = getCookie("token")
        const result = await refreshJWT(memberCookieValue.accessToken,memberCookieValue.refreshToken);
        memberCookieValue.accessToken = result.accessToken;
        memberCookieValue.refreshToken = result.refreshToken;
        setCookie("token",JSON.stringify(memberCookieValue),1);

        const originalRequest = res.config
        originalRequest.headers.Authorization = `Bearer ${result.accessToken}`

        return await axios(originalRequest);
    }
    return res;
}

const requestFail = (err)=>{
    console.log("requestFail",err)
    return Promise.reject(err)
}

const responseFail = (err)=>{
    console.log("responseFail",err)
    return Promise.reject(err)
}

jwtAxios.interceptors.request.use(beforeReq,requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios