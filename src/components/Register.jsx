import { useContext, useState } from "react";
import { authContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { handleRegister,  } = useContext(authContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

    const name = e.target.name.value;

    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== conPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError("Password must contain one uppercase, one lowercase, one number, and one special character");
      return;
    }

    handleRegister(email,password)
    .then(() => {
        setSuccess("Created successfully!")
    }).catch(error => {
      setError(error.message)
    })
  };

  return (
    <div className="flex justify-center mt-4 sm:mt-20 lg:mt-24 items-center px-4">
      <section className="bg-white shadow-xl rounded-2xl p-4 xl:p-6 w-full sm:max-w-[500px] lg:max-w-lg xl:max-w-xl">

        <h1 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-gray-800">
          Create a New Account
        </h1>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input required className="border w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Name" type="text" name="name" />

          <input required className="border w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" type="email" name="email" />

          <input required className="border w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Password" type="password" name="password" />

          <input required className="border w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Confirm Password" type="password" name="conPassword" />

          <input type="submit" value="Register" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-1.5 rounded-lg transition-all" />
          <p className="text-center mt-5 text-gray-600">
            Already have an account? 
            <Link to="/login" className="text-indigo-600 ml-1 font-medium hover:underline">
              Login
            </Link> 
          </p>

        </form>

        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        {success && <p className="text-green-500 text-xl font-light text-center mt-3">{success}</p>}
      </section>
    </div>
  );
};

export default Register;
