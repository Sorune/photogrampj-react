

const LoginPage = () =>{
    return(
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="w-full max-w-lg">
                    <div className="bg-white shadow-lg rounded-lg my-5">
                        <div className="p-6">
                            <div className="flex justify-center">
                                <div className="w-full p-5">
                                    <div className="text-center">
                                        <h1 className="text-xl font-bold text-gray-900 mb-4">Welcome!</h1>
                                    </div>
                                    <form className="user" id="loginForm" method="post" action="/login">
                                        <div className="mb-4">
                                            <input type="text" className="w-full border border-gray-300 p-2 rounded"
                                                   id="exampleInputEmail" name="username"
                                                   placeholder="Enter Your Id..."/>
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" className="w-full border border-gray-300 p-2 rounded"
                                                   id="exampleInputPassword" name="password" placeholder="Password"/>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="customCheck" name="remember-me"
                                                   className="mr-2"/>
                                            <label className="text-sm text-gray-600">Remember Me</label>
                                        </div>
                                        <button type="submit" id="loginBtn"
                                                className="w-full bg-blue-500 text-white py-2 rounded mt-4">Login
                                        </button>
                                        <hr className="my-4"/>
                                        <a href="index.html"
                                           className="w-full bg-yellow-500 text-white py-2 rounded flex justify-center items-center mt-2">
                                            <i className="fab fa-google fa-fw"></i> Login with Kakao
                                        </a>
                                        <a href="index.html"
                                           className="w-full bg-blue-600 text-white py-2 rounded flex justify-center items-center mt-2">
                                            <i className="fab fa-facebook-f fa-fw"></i> Login with Instagram
                                        </a>
                                        <hr className="my-4"/>
                                    </form>
                                    <div className="text-center">
                                        <a className="text-sm text-blue-500" href="forgot-password.html">Forgot
                                            Password?</a>
                                    </div>
                                    <div className="text-center mt-2">
                                        <a className="text-sm text-blue-500" href="/register">Create an Account!</a>
                                    </div>
                                    <div className="text-center mt-2">
                                        <a className="text-sm text-blue-500" href="/">Back to Home!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;