import React from "react";

const DeleteAlert = ({ deleteMsg, onClick, onCancle }) => {
  return (
    <div className="fixed left-0 top-0 z-[500] flex h-[100dvh] w-full items-center justify-center  bg-slate-200/10 p-10 backdrop-blur-sm">
      <div className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-slate-900 p-5 text-slate-300 md:w-96">
        <p>{deleteMsg}</p>
        <div className="flex w-full gap-1">
          <button
            onClick={onClick}
            className="flex w-full items-center justify-center gap-1 rounded-md bg-slate-800 p-2 transition-all duration-300 hover:bg-blue-800"
          >
            Delete
          </button>
          <button
            onClick={onCancle}
            className="flex w-full items-center justify-center gap-1 rounded-md bg-slate-800 p-2 transition-all duration-300 hover:bg-red-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlert;
