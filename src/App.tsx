import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import MyTasks from "./pages/MyTasks";
import ProfilePage from "./pages/ProfilePage";
import AddTask from "./pages/AddTask";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  const [_, setIsSignedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar setIsSignedIn={setIsSignedIn} />
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mytasks" element={<MyTasks />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/addtask" element={<AddTask />} />
          </Routes>
        </TaskContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
