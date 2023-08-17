import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../utils/Toast";
import { ToastContainer } from "react-toastify";
import InputField from "../utils/InputField";
import { BACKEND_URL } from "../utils/BackendUrl";

const SignIn = () => {
  const [, setCookies] = useCookies(["access_token"]); // Removed the underscore
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (event: any) => {
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      errorToast("One or more empty fields.");
      return;
    }
    try {
      const result = await axios.post(`${BACKEND_URL}/User/signIn`, {
        email,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userEmail", result.data.userEmail);
      successToast("Successfully signed in.");
      navigate("/myTasks"); // Navigate after successful sign-in
    } catch (error) {
      errorToast("Email or password is wrong.");
    }
  };

  return (
    <div className="h-screen">
      <div className="px-4 py-16 text-center flex flex-col items-center justify-center gap-y-4">
        <h2 className="text-5xl font-bold mb-12 text-blue-500">Welcome Back</h2>
        <div className="max-w-xs mx-auto">
          <form>
            <InputField
              type="text"
              placeholder="Email"
              state={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              type="password"
              placeholder="Password"
              state={password}
              handleChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={handleSignIn}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
