import { useContext, useState } from "react";
import InputField from "../utils/InputField";
import axios from "axios";
import { BACKEND_URL } from "../utils/BackendUrl";
import { errorToast, successToast } from "../utils/Toast";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const context = useContext(TaskContext);
  if (context === undefined)
    throw new Error("useTaskContext must be used within a TaskContextProvider");

  const { setTaskList } = context;

  const clearInputField = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const handleAddTask = async () => {
    if (title.trim() === "" || description.trim() === "" || dueDate === "") {
      errorToast("One or more empty fields.");
      return;
    }

    const task = {
      title: title,
      description: description,
      status: "pending",
      dueDate: dueDate,
      userEmail: window.localStorage.getItem("userEmail"),
    };

    try {
      await axios.post(`${BACKEND_URL}/Task/addTask`, {
        title: title,
        description: description,
        status: "pending",
        dueDate: dueDate,
        userEmail: window.localStorage.getItem("userEmail"),
      });

      clearInputField();
      successToast("Task added successfully.");
      setTaskList((prev) => [...prev, task]);
    } catch (err) {
      errorToast("Something went wrong.");
    }
  };
  return (
    <div className="border p-6 m-4 flex flex-col gap-3 max-w-md mx-auto mt-14">
      <h2 className="text-center mb-4 text-3xl font-semibold text-blue-500">
        Add Task Details
      </h2>
      <InputField
        type="text"
        state={title}
        placeholder="Title"
        handleChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="min-h-[130px] my-1 border focus:outline-slate-300 w-full mb-6 px-6 py-3 rounded p-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <InputField
        type="date"
        state={dueDate}
        placeholder="Title"
        handleChange={(e) => setDueDate(e.target.value)}
      />
      <button
        className="border hover:bg-blue-600 bg-blue-500 text-white rounded-md p-2"
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <button className="border hover:bg-rose-600 bg-rose-500 text-white rounded-md p-2">
        Cancel
      </button>
    </div>
  );
};
export default AddTask;
