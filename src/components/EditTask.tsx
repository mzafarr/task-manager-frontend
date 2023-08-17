import { useState } from "react";
import InputField from "../utils/InputField";
import axios from "axios";
import { BACKEND_URL } from "../utils/BackendUrl";
import { errorToast, successToast } from "../utils/Toast";

const EditTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleEditTask = () => {
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate === ""
    ) {
      errorToast("One or more empty fields.");
      return;
    }

    try {
      axios.post(`${BACKEND_URL}/Task/EditTask`, {
        title: title,
        description: description,
        status: "pending",
        userEmail: window.localStorage.getItem("userEmail"),
      });
      successToast("Task Edited successfully.");
    } catch (err) {
      errorToast("Something went wrong.");
    }
  };

  return (
    <div className="border p-6 m-4 flex flex-col gap-3 max-w-md mx-auto mt-14">
      <h2 className="text-center mb-4 text-3xl font-semibold text-blue-500">
        Edit Task Details
      </h2>
      <InputField
        type="text"
        state={title}
        placeholder="Title"
        handleChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="min-h-[130px] my-1 border focus:outline-slate-300 p-2"
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
        onClick={handleEditTask}
      >
        Edit Task
      </button>
      <button className="border hover:bg-rose-600 bg-rose-500 text-white rounded-md p-2">
        Cancel
      </button>
    </div>
  );
};
export default EditTask;
