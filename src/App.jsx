import { useContext } from "react";
import Column from "./components/Column";
import { TaskContext } from "./context/TaskProvider";
import NewTask from "./components/NewTask";
import DeleteAlert from "./components/DeleteAlert";

function App() {
  const { tasks, openModal, openClear, setOpenClear, handleClear } =
    useContext(TaskContext);

  return (
    <main className="min-h-[100dvh] w-full flex-col gap-2 bg-gradient-to-bl from-slate-900 to-slate-800 p-4">
      <header className="container m-auto mb-4 flex justify-between rounded-lg bg-slate-700 p-4 text-xs text-slate-200 lg:text-base">
        <span>GoldScan | Mehrdad Azizkhani</span>
        <span>August 2023</span>
      </header>
      <section className="container m-auto flex w-full flex-col gap-2 lg:flex-row">
        <Column title="To Do" tasks={tasks} stage="todo" />
        <Column title="Doing" tasks={tasks} stage="doing" />
        <Column title="Done" tasks={tasks} stage="done" />
      </section>
      {openModal.open && <NewTask stage={openModal.stage} />}
      {openClear.open && (
        <DeleteAlert
          deleteMsg={`Are you sure you want to delete all the tasks in the ${openClear.stage} column?`}
          onClick={handleClear}
          onCancle={() => setOpenClear({ ...openClear, open: false })}
        />
      )}
    </main>
  );
}

export default App;
