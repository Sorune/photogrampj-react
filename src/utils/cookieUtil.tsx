// cookieUtil.tsx

/**
 * 쿠키에서 값을 가져오는 함수
 * @param name 쿠키의 이름
 * @returns 쿠키의 값 또는 null
 */
export const getCookie = (name: string) => {
    const matches = document.cookie.match(new RegExp(
        `(?:^|; )${name}=([^;]*)`
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

/**
 * 쿠키에 값을 설정하는 함수
 * @param name 쿠키의 이름
 * @param value 쿠키에 저장할 값
 * @param days 쿠키의 유효 기간(일 단위)
 */
export const setCookie = (name: string, value: string, days: number): void => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // 일 단위로 만료일 설정
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

/**
 * 쿠키를 삭제하는 함수
 * @param name 삭제할 쿠키의 이름
 */
export const deleteCookie = (name: string): void => {
    document.cookie = name + "=; Max-Age=0; path=/;"; // Max-Age를 0으로 설정해 쿠키를 삭제
};
