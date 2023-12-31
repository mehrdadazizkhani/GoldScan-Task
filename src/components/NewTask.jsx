import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskProvider";

const NewTask = ({ stage }) => {
  const { setOpenModal, handleAdd } = useContext(TaskContext);
  const [tag, setTag] = useState("1");
  const [task, setTask] = useState("");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleAddTask = () => {
    const now = new Date();
    const date = `${monthNames[now.getMonth()]} ${now
      .getDay()
      .toString()
      .padStart(2, "0")} ${now.getFullYear()} - ${now
      .getHours()
      .toString()
      .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    let id = now.getFullYear().toString();
    id += (now.getMonth < 9 ? "0" : "") + now.getMonth().toString();
    id += (now.getDate < 10 ? "0" : "") + now.getDate().toString();
    id += (now.getDate < 24 ? "0" : "") + now.getHours().toString();
    id += (now.getDate < 60 ? "0" : "") + now.getMinutes().toString();
    id += (now.getDate < 60 ? "0" : "") + now.getSeconds().toString();
    id += (now.getDate < 1000 ? "0" : "") + now.getMilliseconds().toString();
    if (task) {
      handleAdd({ id: id, stage: stage, task: task, tag: tag, date: date });
      setOpenModal({ ...setOpenModal, open: false });
    }
  };

  return (
    <section
      className={`absolute left-0 top-0 flex h-[100dvh] w-full items-center justify-center bg-slate-200/10 p-10 backdrop-blur-sm`}
    >
      <div className="flex w-full flex-col gap-2 rounded-lg bg-slate-900 p-5 text-xs text-slate-300 md:w-96 md:text-base">
        <div className="flex gap-1">
          <span className="capitalize">{stage}</span>&gt;<span>New Task</span>
        </div>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          id="task"
          type="text"
          placeholder="write a task"
          className="w-full rounded-md bg-slate-700 p-2"
        />
        <select
          defaultValue="1"
          onChange={(e) => setTag(e.target.value)}
          className="rounded-md bg-slate-700 p-2"
        >
          <option value="0">High</option>
          <option value="1">Normal</option>
          <option value="2">Low</option>
        </select>
        <div className="flex w-full gap-1">
          <button
            onClick={handleAddTask}
            className="flex w-full items-center justify-center gap-1 rounded-md bg-slate-800 p-2 transition-all duration-300 hover:bg-blue-800"
          >
            Add
          </button>
          <button
            onClick={() => setOpenModal({ ...setOpenModal, open: false })}
            className="flex w-full items-center justify-center gap-1 rounded-md bg-slate-800 p-2 transition-all duration-300 hover:bg-red-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewTask;
