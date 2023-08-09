import { stringify } from "postcss";
import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
  );
  const [openModal, setOpenModal] = useState({ open: false, stage: "todo" });
  const [dragOver, setDragOver] = useState(false);
  const [sorts, setSorts] = useState(
    localStorage.getItem("sorts")
      ? JSON.parse(localStorage.getItem("sorts"))
      : [
          { stage: "todo", isSorted: false },
          { stage: "doing", isSorted: false },
          { stage: "done", isSorted: false },
        ],
  );

  const handleAdd = (task) => {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleChangeStage = (id, stage) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, stage: stage } : task,
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleChangeTag = (id, tag) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, tag: tag } : task,
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleChangeTask = (id, taskText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, task: taskText } : task,
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        openModal,
        dragOver,
        sorts,
        setSorts,
        setOpenModal,
        handleAdd,
        handleDelete,
        handleChangeStage,
        setDragOver,
        handleChangeTag,
        handleChangeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
