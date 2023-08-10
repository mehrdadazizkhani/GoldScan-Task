import React, { useContext, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import { RiDraggable } from "react-icons/ri";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { TaskContext } from "../context/TaskProvider";
import DeleteAlert from "./DeleteAlert";

const Card = ({ data }) => {
  const [tag, setTag] = useState(data.tag);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(data.task);
  const {
    handleDelete,
    setDragOver,
    handleChangeTag,
    handleChangeTask,
    handleChangeStage,
  } = useContext(TaskContext);
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

  const handleUpperStage = () => {
    if (data.stage === "doing") {
      handleChangeStage(data.id, "todo");
    } else {
      handleChangeStage(data.id, "doing");
    }
  };

  const handleLowerStage = () => {
    if (data.stage === "doing") {
      handleChangeStage(data.id, "done");
    } else {
      handleChangeStage(data.id, "doing");
    }
  };

  return (
    <div
      onDragStart={handleOnDrag}
      onDragEnd={() => setDragOver(false)}
      draggable={edit ? false : true}
      className={`relative flex w-full flex-grow-0 cursor-pointer justify-between overflow-hidden rounded-md bg-slate-300 px-2 pb-5 pt-1 text-xs text-slate-900 md:text-sm lg:text-base`}
    >
      {deleteAlert && (
        <DeleteAlert
          deleteMsg="Are you sure you want to delete this task?"
          onClick={handleDeleteTask}
          onCancle={() => setDeleteAlert(false)}
        />
      )}
      <div className="flex w-1/2 items-center 2xl:w-2/3">
        <div className="text-base md:hidden">
          <BiCaretUp
            onClick={handleUpperStage}
            className={`${data.stage === "todo" ? "invisible" : "block"}`}
          />
          <BiCaretDown
            onClick={handleLowerStage}
            className={`${data.stage === "done" ? "invisible" : "block"}`}
          />
        </div>
        <RiDraggable size={20} className="hidden md:block" />
        {edit ? (
          <input
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full truncate bg-transparent px-4 py-2"
          />
        ) : (
          <p className="w-full truncate px-4 py-2" title={input}>
            {input}
          </p>
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
            ? "bg-blue-300 text-slate-800"
            : data.tag === "0"
            ? " bg-red-300 text-slate-800"
            : " bg-slate-400 text-slate-50"
        } absolute bottom-0 left-0 flex h-3 w-full items-center justify-between px-2 py-2`}
      >
        <span className="text-[10px]">{data.date}</span>
      </div>
    </div>
  );
};

export default Card;
