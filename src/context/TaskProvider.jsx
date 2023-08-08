import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 56565, stage: "doing", task: "asdasdad", tag: "high" },
    { id: 56564, stage: "done", task: "asdasdad", tag: "normal" },
    { id: 56563, stage: "done", task: "asdasdad", tag: "low" },
  ]);

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
