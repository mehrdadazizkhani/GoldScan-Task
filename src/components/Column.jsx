import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "./Card";
import { TaskContext } from "../context/TaskProvider";

const Column = ({ title, tasks, stage }) => {
  const tasksByStage = tasks.filter((task) => task.stage === stage);
  const {
    handleChangeStage,
    setOpenModal,
    dragOver,
    setDragOver,
    sorts,
    setSorts,
  } = useContext(TaskContext);
  const colSort = sorts.filter((sort) => sort.stage === stage)[0].isSorted;

  const compareFn = (a, b) => {
    if (a.tag < b.tag) {
      return -1;
    }
    if (a.tag > b.tag) {
      return 1;
    }
    return 0;
  };

  colSort && tasksByStage.sort(compareFn);

  const handleOnDrop = (e) => {
    handleChangeStage(e.dataTransfer.getData("id"), stage);
    setDragOver(false);
  };

  const handleSort = () => {
    const updatedSorts = sorts.map((sort) =>
      sort.stage === stage ? { ...sort, isSorted: !colSort } : sort,
    );
    setSorts(updatedSorts);
    localStorage.setItem("sorts", JSON.stringify(updatedSorts));
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      name={stage}
      className="flex h-fit w-full flex-col justify-between gap-5 rounded-lg bg-slate-200 p-3 text-slate-900 lg:w-1/3"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-base font-medium lg:text-xl">{title}</h2>
        <div
          onClick={handleSort}
          className={`flex cursor-pointer select-none items-center gap-2 uppercase`}
        >
          <div
            className={`flex h-4 w-8 rounded-full bg-slate-600 p-1 ${
              !colSort ? "justify-start" : " justify-end"
            }`}
          >
            <div className="aspect-square h-full rounded-full bg-slate-300"></div>
          </div>
          sort
        </div>
      </div>
      <div
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
        className="relative flex min-h-[56px] w-full flex-col gap-1 p-2 md:min-h-[64px]"
      >
        {dragOver && (
          <div className="absolute left-0 top-0 h-full w-full animate-pulse rounded-lg border-2 border-dotted border-slate-700"></div>
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
