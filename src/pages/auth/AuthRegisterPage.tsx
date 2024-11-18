

const AuthRegisterPage = () => {
    return (
        <div className="container mx-auto py-6">
            <div className="bg-white shadow-lg rounded-lg my-3">
                <div className="p-6">
                    <div className="flex justify-center">
                        <div className="w-full max-w-xl">
                            <div className="text-center">
                                <h1 className="text-xl font-bold text-gray-900 mb-4">회원가입을 해보자!</h1>
                            </div>
                            <form role="form" className="user" action="/register" method="post">
                                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        <input type="text" className="w-full border border-gray-300 p-2 rounded" id="ID" name="username" placeholder="아이디" />
                                    </div>
                                    <div className="col-span-1">
                                        <input type="password" className="w-full border border-gray-300 p-2 rounded" id="password" name="password" placeholder="비밀번호" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="col-span-1">
                                        <input type="text" className="w-full border border-gray-300 p-2 rounded" id="name" name="name" placeholder="이름"/>
                                    </div>
                                    <div className="col-span-1">
                                        <input type="text" className="w-full border border-gray-300 p-2 rounded" id="Nickname" name="nickName" placeholder="닉네임"/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <input type="text" className="w-full border border-gray-300 p-2 rounded" id="phone" name="phone" placeholder="핸드폰번호" />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="col-span-1">
                                        <input type="text" className="w-full border border-gray-300 p-2 rounded" name="zoneCode" placeholder="우편번호" />
                                    </div>
                                    <div className="col-span-1">
                                        <button type="button" className="w-full bg-blue-500 text-white py-2 rounded" id="addressInput">우편번호</button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <input type="text" className="w-full border border-gray-300 p-2 rounded" name="roadAddress" placeholder="도로명주소" />
                                </div>
                                <div className="mt-4">
                                    <input type="text" className="w-full border border-gray-300 p-2 rounded" name="buildingName" placeholder="건물이름" />
                                </div>
                                <div className="mt-4">
                                    <input type="text" className="w-full border border-gray-300 p-2 rounded" name="address" placeholder="나머지 주소" />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <button type="submit" className="col-span-1 bg-blue-500 text-white py-2 rounded">회원가입</button>
                                    <div className="col-span-1 text-center">
                                        <a className="text-sm text-blue-500" href="/login">로그인으로 돌아가기</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;