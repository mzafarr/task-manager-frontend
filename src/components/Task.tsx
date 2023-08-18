import { useEffect, useState } from "react";

interface TaskProps {
  task: Task;
  handleDelete: (_id: any) => void;
  handleUpdateStatus: (title: string, newStatus: string) => void;
}

const Task: React.FC<TaskProps> = ({
  task,
  handleUpdateStatus,
  handleDelete,
}) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate.split("T")[0]);
  const [status, setStatus] = useState(task.status);

  useEffect(() => {
    handleUpdateStatus(title, status);
  }, [status]);

  return (
    <div className="flex flex-col border p-4 m-4 rounded w-[90%] sm:w-auto">
      <div className="flex items-center border-b pb-2 justify-between mb-2">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <img
          className="cursor-pointer"
          src="../images/deleteIcon.png"
          onClick={() => handleDelete(title)}
        />
      </div>
      <p className="py-1 ">
        <b>Description:</b> {description}
      </p>
      <p className="py-1 ">
        <b>Due Date:</b> {dueDate}
      </p>
      <b>Task Status:</b>
      <div className="flex">
        <label className="py-1 px-2">
          <input
            className="mr-1"
            type="radio"
            value="pending"
            checked={status === "pending"}
            onChange={(e) => setStatus(e.target.value)}
          />
          Pending
        </label>
        <label className="py-1 px-2">
          <input
            className="mr-1"
            type="radio"
            value="in-progress"
            checked={status === "in-progress"}
            onChange={(e) => setStatus(e.target.value)}
          />
          In-Progress
        </label>
        <label className="py-1 px-2">
          <input
            className="mr-1"
            type="radio"
            value="completed"
            checked={status === "completed"}
            onChange={(e) => setStatus(e.target.value)}
          />
          Completed
        </label>
      </div>
    </div>
  );
};

export default Task;
