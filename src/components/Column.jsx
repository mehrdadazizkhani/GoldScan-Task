import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "./Card";

const Column = ({ title, cards, stage }) => {
  const cardsByStage = cards.filter((card) => card.stage === stage);

  return (
    <div className="flex h-fit w-full flex-col justify-between gap-5 rounded-lg bg-slate-200 p-3 text-slate-900">
      <h2 className="text-xl font-medium">{title}</h2>
      <div className="flex flex-col gap-1">
        {cardsByStage.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <div className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition-all duration-300 hover:bg-slate-300">
        <AiOutlinePlus />
        Add a card
      </div>
    </div>
  );
};

export default Column;
