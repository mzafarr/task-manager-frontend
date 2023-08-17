import axios from "axios";
import React, { createContext, useEffect, useState, ReactNode } from "react";
import { BACKEND_URL } from "../utils/BackendUrl";

interface TaskContextProps {
  children: ReactNode;
}

interface TaskContextType {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export const TaskContextProvider: React.FC<TaskContextProps> = ({
  children,
}) => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = window.localStorage.getItem("userEmail");
        const res = await axios.get(
          `${BACKEND_URL}/Tasks/showTasks?userEmail=${userEmail}`
        );
        setTaskList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskContext.Provider>
  );
};
