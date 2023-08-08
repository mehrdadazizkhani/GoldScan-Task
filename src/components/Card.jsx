import React from "react";

const Card = ({ data }) => {
  return (
    <div
      draggable
      className={`${
        data.tag === "low"
          ? "bg-blue-300"
          : data.tag === "high"
          ? " bg-red-300"
          : " bg-slate-300"
      } flex w-full cursor-pointer justify-between rounded-md p-2`}
    >
      <p>{data.task}</p>
      <select className="bg-transparent">
        <option selected={data.tag === "low"} value="low">
          Low
        </option>
        <option selected={data.tag === "normal"} value="normal">
          Normal
        </option>
        <option selected={data.tag === "high"} value="high">
          High
        </option>
      </select>
    </div>
  );
};

export default Card;
