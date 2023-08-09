import React, { useContext, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import { RiDraggable } from "react-icons/ri";
import { TaskContext } from "../context/TaskProvider";

const Card = ({ data }) => {
  const [tag, setTag] = useState(data.tag);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(data.task);
  const { handleDelete, setDragOver, handleChangeTag, handleChangeTask } =
    useContext(TaskContext);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const handleChangeTagSelect = (e) => {
    setTag(e.target.value);
    handleChangeTag(data.id, e.target.value);
  };

  const handleChangeTaskText = () => {
    handleChangeTask(data.id, input);
    setEdit(false);
  };

  const handleDeleteTask = () => {
    handleDelete(data.id);
    setDeleteAlert(false);
  };

  const handleOnDrag = (e) => {
    e.dataTransfer.setData("id", data.id);
    setDragOver(true);
  };

  return (
    <div
      onDragStart={handleOnDrag}
      onDragEnd={() => setDragOver(false)}
      draggable={edit ? false : true}
      className={`relative flex w-full cursor-pointer justify-between overflow-hidden rounded-md bg-slate-300 py-1 text-xs md:text-sm lg:text-base`}
    >
      {deleteAlert && (
        <div className="fixed left-0 top-0 z-[500] flex h-[100dvh] w-full items-center justify-center  bg-slate-800/10 p-10 backdrop-blur-sm">
          <div className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-slate-900 p-5 text-slate-300 md:w-96">
            <p>Are you sure you want to delete this task?</p>
            <div className="flex w-full gap-1">
              <button
                onClick={handleDeleteTask}
                className="flex w-full items-center justify-center gap-1 rounded-md bg-slate-800 p-2 transition-all duration-300 hover:bg-blue-800"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteAlert(false)}
                className="flex w-full items-center justify-center gap-1 rounded-md bg-slate-800 p-2 transition-all duration-300 hover:bg-red-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex w-1/2 items-center pl-4 2xl:w-2/3">
        <RiDraggable size={20} className="cursor-move" />
        {edit ? (
          <input
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full truncate bg-transparent px-4 py-2"
          />
        ) : (
          <p className="w-full truncate px-4 py-2">{input}</p>
        )}
      </div>
      <div className="flex w-1/2 items-center justify-end gap-1 p-1 2xl:w-1/3">
        <select
          value={tag}
          className="bg-transparent text-xs"
          onChange={handleChangeTagSelect}
        >
          <option value="2">Low</option>
          <option value="1">Normal</option>
          <option value="0">High</option>
        </select>
        <div
          className={`relative flex aspect-square h-full items-center justify-center rounded-full ${
            edit
              ? "bg-slate-700 text-slate-300 hover:bg-slate-800"
              : "bg-transparent/10 hover:bg-transparent/20"
          }`}
        >
          <div
            className={`${
              edit ? "block" : "hidden"
            } absolute left-0 top-0 h-full w-full animate-ping rounded-full bg-slate-500`}
          ></div>
          {edit ? (
            <AiOutlineCheck
              onClick={handleChangeTaskText}
              className="absolute z-10"
            />
          ) : (
            <AiOutlineEdit onClick={() => setEdit(true)} />
          )}
        </div>
        <div
          onClick={() => setDeleteAlert(true)}
          className="flex aspect-square h-full items-center justify-center rounded-full bg-transparent/10 hover:bg-transparent/20"
        >
          <AiOutlineDelete />
        </div>
      </div>
      <div
        className={`${
          data.tag === "2"
            ? "bg-blue-300"
            : data.tag === "0"
            ? " bg-red-300"
            : " bg-slate-400"
        } absolute bottom-0 left-0 h-full w-2`}
      ></div>
    </div>
  );
};

export default Card;
