import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { PiWarningCircleLight } from "react-icons/pi";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { TaskContext } from "../context/TaskProvider";

const Help = () => {
  const { setHelp } = useContext(TaskContext);
  return (
    <section className="fixed left-0 top-0 z-[500] flex h-[100dvh] w-full items-center justify-center  bg-slate-200/10 p-10 backdrop-blur-sm">
      <div className="container flex h-full items-center justify-center rounded-lg">
        <div className="max-h-[60dvh] w-full overflow-auto rounded-lg scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-500 md:w-3/5">
          <div className="flex flex-col justify-center gap-5 bg-slate-900 p-5 text-sm text-slate-300 lg:text-base">
            <div className="flex flex-col gap-2">
              <AiOutlinePlus
                onClick={() => setHelp(false)}
                className="mb-5 rotate-45 cursor-pointer rounded-full bg-slate-800"
                size={20}
              />
              <div className="flex w-full flex-col items-center justify-between pb-6 lg:flex-row">
                <h2 className="text-center text-sm font-semibold md:text-lg">
                  Welcome to the To-Do Application
                </h2>
                <p className="text-xs">Mehrdad Azizkhani, August 2023</p>
              </div>
              <p>
                We're here to assist you in making the most of our To-Do list
                application. Whether you're new to the app or looking to explore
                its advanced features, this help page is designed to provide you
                with all the information you need.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Getting Started:</h3>
              <p>
                This application has three columns "To Do", "Doing", and "Done".
                You can add a new task at the bottom of each column by clicking
                on the{" "}
                <span className="mx-1 inline-flex w-fit items-center gap-2 rounded-md bg-slate-800 px-2 text-xs md:text-sm lg:text-base">
                  <AiOutlinePlus /> Add a card
                </span>{" "}
                sign. Then write any task message, choose the priority, and
                click on the add button.
              </p>
              <p className="flex items-start justify-start gap-1 py-3 pl-4 text-orange-300">
                <PiWarningCircleLight size={28} />
                Note that the new task will add to the same column you chose
                before.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Sort Tasks:</h3>
              <p>
                Each task card has a drop-down menu to select task priority. By
                choosing task priority, the color of the priority label on the
                bottom side of the task card will change.
                <br />
                br Priority labels color coded as follows:
              </p>
              <ul className="py-2 pl-5">
                <li className="flex items-center gap-2 text-red-300">
                  <div className="h-3 w-3 rounded-full bg-red-300"></div> High
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <div className="h-3 w-3 rounded-full bg-slate-400"></div>{" "}
                  Normal
                </li>
                <li className="flex items-center gap-2 text-blue-300">
                  <div className="h-3 w-3 rounded-full bg-blue-300"></div> Low
                </li>
              </ul>
              <p>
                On the top right corner of each column, you will see a sort
                toggle, use it to sort columns by task priority.
              </p>
              <p className="flex items-start justify-start gap-1 py-3 pl-4 text-orange-300">
                <PiWarningCircleLight size={28} />
                Note that by default, all tasks are sorted in descending order
                based on the time they were added.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Delete Tasks:</h3>
              <p>You have two ways to delete tasks:</p>
              <ul className="list-disc py-2 pl-5">
                <li>
                  <strong>The first method: </strong>Click on the trash icon on
                  each task card to delete that task.
                </li>
                <li>
                  <strong>The second method: </strong>In each column, next to
                  the sorting toggle, click Clear All to clear all the tasks
                  related to that column.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Edit Tasks:</h3>
              <p>Click on the edit icon on each task card to edit that task.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Change Columns:</h3>
              <ul className="list-disc py-2 pl-5">
                <li>
                  <strong>On larger devices: </strong>Simply drag and drop the
                  task you want to change its column.
                </li>
                <li>
                  <strong>On smaller devices [Touch Screens]: </strong>Use
                  <BiCaretUp className="mx-1 inline rounded-sm bg-slate-700" />
                  and{" "}
                  <BiCaretDown className="mx-1 inline rounded-sm bg-slate-700" />{" "}
                  icons to move between columns.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Local Storage:</h3>
              <p>
                All the changes you make such as adding, editing, deleting,
                sorting, changing the color of labels, and changing the stage of
                tasks will be saved in local storage.
              </p>
            </div>
            <button
              onClick={() => setHelp(false)}
              className="rounded-md bg-slate-700 py-2 hover:bg-slate-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
