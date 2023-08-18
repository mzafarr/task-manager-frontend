import React from "react";

interface SearchProps {
  search: string;
  tasks: Task[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Search: React.FC<SearchProps> = ({
  search,
  setSearch,
  tasks,
  setTasks,
}) => {
  const handleSearch = () => {
    setTasks(tasks.filter((task) => task.title.toLowerCase().includes(search)));
  };

  return (
    <input
      type="text"
      name="search"
      placeholder="search your tasks"
      value={search}
      className="px-2 py-1.5 mx-4 rounded border-lg w-[90%] sm:w-[60%] border-slate-500 outline-slate-200 outline-none"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch();
      }}
    />
  );
};

export default Search;
