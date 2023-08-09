import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "./Card";
import { TaskContext } from "../context/TaskProvider";

const Column = ({ title, tasks, stage }) => {
  const tasksByStage = tasks.filter((task) => task.stage === stage);
  const { handleChangeStage, setOpenModal, dragOver, setDragOver } =
    useContext(TaskContext);

  const handleOnDrop = (e) => {
    handleChangeStage(e.dataTransfer.getData("id"), stage);
    setDragOver(false);
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      name={stage}
      className="flex h-fit w-full flex-col justify-between gap-5 rounded-lg bg-slate-200 p-3 text-slate-900 lg:w-1/3"
    >
      <h2 className="text-base font-medium lg:text-xl">{title}</h2>
      <div
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
        className="relative flex min-h-[40px] w-full flex-col gap-1 p-2 lg:min-h-[50px]"
      >
        {dragOver && (
          <div className="absolute left-0 top-0 h-full w-full animate-pulse rounded-lg border border-dashed border-green-700"></div>
        )}
        {tasksByStage.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <div
        onClick={() => setOpenModal({ open: true, stage: stage })}
        className="group flex cursor-pointer items-center gap-2 rounded-md p-2 text-xs transition-all duration-300 hover:bg-slate-300 md:text-sm lg:text-base"
      >
        <AiOutlinePlus className="transition-all duration-300 group-hover:rotate-90" />
        Add a card
      </div>
    </div>
  );
};

export default Column;
