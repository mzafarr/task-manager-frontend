import Task from "../components/Task";
import Search from "../components/Search";
import Sort from "../components/Sort";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const MyTasks = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const context = useContext(TaskContext);
  if (context === undefined)
    throw new Error("useTaskContext must be used within a TaskContextProvider");

  const { taskList } = context;
  const [filteredTasks, setFilteredTasks] = useState(taskList);
  return (
    <div className="max-w-sm mx-auto min-h-screen">
      {/* <h2 className="text-2xl text-center mb-2">
        Completed Tasks: {taskList.length}{" "}
      </h2>
      <h2 className="text-2xl text-center mb-2">
        In-Progress Tasks: {taskList.length}
      </h2>
      <h2 className="text-2xl text-center mb-2">
        Pending Tasks: {taskList.length}
      </h2> */}
      <h2 className="text-4xl text-center my-8">
        {taskList.length} remaining tasks
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white my-2 px-6 py-3 rounded-lg w-full"
        onClick={() => navigate("/addtask")}
      >
        Add Task
      </button>
      <div className="flex">
        <Search
          search={search}
          setSearch={setSearch}
          tasks={filteredTasks}
          setTasks={setFilteredTasks}
        />
        <Sort
          sortOption={sortOption}
          setSortOption={setSortOption}
          tasks={filteredTasks}
          setTasks={setFilteredTasks}
        />
      </div>

      {taskList.length !== 0 &&
        taskList.map((task, index) => {
          return <Task task={task} key={index} />;
        })}
    </div>
  );
};

export default MyTasks;
