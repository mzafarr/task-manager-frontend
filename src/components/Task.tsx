interface TaskProps {
  task: Task;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="p-3 my-4 border rounded-xl ">
      <h1>{task.title}</h1>
      <p> {task.description}</p>
      <p> {task.status}</p>
      <p> {task.dueDate}</p>
    </div>
  );
};

export default Task;
