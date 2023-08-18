import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col h-80 mt-12 justify-center items-center">
      <h1 className="text-5xl font-bold text-center m-4 text-blue-500">
        Welcome to TaskMaster
      </h1>
      <h2 className="text-3xl font-medium text-center m-4 text-blue-500">
        {" "}
        Your Ultimate Task Management Solution!
      </h2>
      <p className="text-2xl max-w-md text-center mx-auto">
        Are you tired of being overwhelmed by your never-ending to-do list? Look
        no further! TaskMaster is here to improve the way you manage and
        organize your tasks.
      </p>
      <Link to={'/signUp'} className="text-2xl cursor-pointer text-white bg-blue-500 hover:bg-blue-600 p-2 pb-3 m-8 rounded-lg ">
      Get Started
    </Link>
    </div>
  );
};

export default Home;
