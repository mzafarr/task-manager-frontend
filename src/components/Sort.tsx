import React from "react";

interface SortProps {
  sortOption: string;
  tasks: Task[];
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Sort: React.FC<SortProps> = ({
  tasks,
  setTasks,
  sortOption,
  setSortOption,
}) => {
  const sortByStatus = (tasks: Task[]) => {
    const statusOrder = ["pending", "in-progress", "completed"];
    setTasks(
      tasks.slice().sort((a, b) => {
        const statusA = a.status.toLowerCase();
        const statusB = b.status.toLowerCase();
        return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB);
      })
    );
  };
  const handleChange = (e: any) => {
    setSortOption(e.target.value);
    sortByStatus(tasks);
  };
  return (
    <select
      className="mx-4 rounded-lg p-2 focus:outline-slate-300 cursor-pointer border rw-[85%] sm:w-24"
      name="sort"
      value={sortOption}
      onChange={(e) => handleChange(e)}
    >
      <option disabled value="">
        Sort by
      </option>
      <option value="Status">Status</option>
      <option value="DueDate">Due Date</option>
    </select>
  );
};

export default Sort;
