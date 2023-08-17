import { useState } from "react";
import axios from "axios";
import { errorToast, successToast } from "../utils/Toast";
import { ToastContainer } from "react-toastify";
import InputField from "../utils/InputField";
import { BACKEND_URL } from "../utils/BackendUrl";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async (event: any) => {
    event.preventDefault();
    if (email.trim() === "" || name.trim() === "" || password.trim() === "") {
      errorToast("One or more empty fields.");
      return;
    }

    try {
      await axios.post(`${BACKEND_URL}/User/signUp`, {
        name,
        email,
        password,
      });
      successToast("Registration Completed!");
      navigate("/MyTasks");
    } catch (error) {
      console.error(error);
      errorToast("Something went wrong.");
    }
  };

  return (
    <div className="h-screen">
      <div className="px-4 py-16 text-center flex flex-col items-center justify-center gap-y-4">
      <h2 className="text-5xl font-bold mb-12 text-blue-500">Create an Account</h2>

        <div className="max-w-xs mx-auto">
          <InputField
            type="text"
            placeholder="Name"
            state={name}
            handleChange={(e) => setName(e.target.value)}
          />
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
            onClick={handleSignUp}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full"
          >
            Sign Up
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
