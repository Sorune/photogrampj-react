import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { getCookie, setCookie } from "./cookieUtil";

// 전역에서 사용될 API host 설정
export const API_HOST: string = "http://localhost:8080";

// TokenInfo 타입 정의
interface TokenInfo {
    accessToken: string;
    refreshToken: string;
}

const jwtAxios = axios.create();

// 토큰 갱신 함수
const refreshJWT = async (accessToken: string, refreshToken: string): Promise<TokenInfo> => {
    const header = { headers: { "Authorization": `Bearer ${accessToken}` } };

    const res: AxiosResponse<TokenInfo> = await axios.post(
        `${API_HOST}/api/member/refresh?refreshToken=${refreshToken}`,
        null,
        header
    );

    return res.data;
};

// 토큰 정보 가져오는 함수
const getTokenInfo = (): TokenInfo | null => {
    const tokenInfoString = getCookie("token");
    return tokenInfoString ? JSON.parse(tokenInfoString) : null;
};

// Request 인터셉터
const beforeReq = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    const tokenInfo = getTokenInfo();

    if (!tokenInfo) {
        console.log("Token Not Found or Invalid");
        return Promise.reject({
            response: {
                data: { error: "REQUIRE_LOGIN" },
            },
        });
    }

    // headers가 없을 경우 초기화 (AxiosRequestHeaders 사용)
    if (!config.headers) {
        config.headers = {} as AxiosRequestHeaders;
    }

    config.headers.Authorization = `Bearer ${tokenInfo.accessToken}`;

    return config;
};

// Response 인터셉터
const beforeRes = async (res: AxiosResponse): Promise<AxiosResponse> => {
    const data = res.data;

    if (data && data.error === "ERROR_ACCESS_TOKEN") {
        const tokenInfo = getTokenInfo();

        if (!tokenInfo) {
            return Promise.reject({ response: { data: { error: "INVALID_TOKEN" } } });
        }

        const result = await refreshJWT(tokenInfo.accessToken, tokenInfo.refreshToken);

        // 새로운 토큰 정보 저장
        setCookie("token", JSON.stringify(result), 1);

        // 원래 요청을 다시 실행
        const originalRequest = res.config;
        if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;
        }

        return axios(originalRequest);
    }

    return res;
};

// 요청 실패 시 처리
const requestFail = (err: AxiosError): Promise<AxiosError> => {
    console.log("requestFail", err);
    return Promise.reject(err);
};

// 응답 실패 시 처리
const responseFail = (err: AxiosError): Promise<AxiosError> => {
    console.log("responseFail", err);
    return Promise.reject(err);
};

// Axios 인터셉터 설정
jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
