import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvider";

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    const { handleLogin, handleGoogleSignIn } = useContext(authContext);
    // const {handleGoogleSignIn} = useContext(authContext)
    const handleSubmit = e => {
        e.preventDefault();
        setError('');
        setSuccess('')
        console.log("form submitted");
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleLogin(email,password)
        .then(() => {
            setSuccess("Login successful");
            navigate(location.state?.from)            
        }).catch(error => {
            setError(error.message)
        })
    };
    const handleGoogle = () => {
        setError('');
        setSuccess('')
        handleGoogleSignIn()
        .then(() => {
            setSuccess("Login successful");
            navigate(location.state?.from)

        }).catch(error => {
            setError(error.message);
            
        })
    }
    return (
        <div className="flex justify-center mt-4 sm:mt-20 lg:mt-24 items-center px-4">
            <section className="bg-white z-50 shadow-xl rounded-2xl p-4 xl:p-6 w-full sm:max-w-[500px] lg:max-w-lg xl:max-w-xl">
                <h1 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-gray-800">
                    Login to Your Account
                </h1>

                <form className="space-y-3" onSubmit={handleSubmit}>
                    <input required className="border w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" type="email" name="email" />
                    <input required className="border w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Password" type="password" name="password" />

                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-1.5 rounded-lg transition-all">
                        Login
                    </button>

                    <div className="flex items-center gap-3 my-3">
                        <div className="h-[1px] bg-gray-300 w-full"></div>
                        <p className="text-gray-500 text-sm">OR</p>
                        <div className="h-[1px] bg-gray-300 w-full"></div>
                    </div>


                    <button onClick={ handleGoogle} type="button" className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 rounded-lg flex justify-center items-center gap-2 transition-all">

                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" className="w-5 h-5" />
                        Continue with Google
                    </button>
                    <section className="my-4">
                        {error && <p className="text-red-600 text-center mb-2">{error}</p>}
                        {success && <p className="text-green-600 text-center mb-2">{success}</p>}
                        
                    </section>
                </form>

                <p className="text-center mt-4 text-gray-600">
                    Don't have an account? 
                    <Link to="/register" className="text-indigo-600 ml-1 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </section>
            
        </div>
    );
};

export default Login;
