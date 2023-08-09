import { useContext } from "react";
import Column from "./components/Column";
import { TaskContext } from "./context/TaskProvider";
import NewTask from "./components/NewTask";

function App() {
  const { tasks, openModal } = useContext(TaskContext);
  return (
    <main className="min-h-[100dvh] w-full flex-col gap-2 bg-gradient-to-bl from-slate-500 to-slate-600 p-4">
      <header className="container m-auto mb-4 flex justify-between rounded-lg bg-slate-800 p-4 text-xs text-slate-200 lg:text-base">
        <span>GoldScan | Mehrdad Azizkhani</span>
        <span>August 2023</span>
      </header>
      <section className="container m-auto flex w-full flex-col gap-2 lg:flex-row">
        <Column title="To Do" tasks={tasks} stage="todo" />
        <Column title="Doing" tasks={tasks} stage="doing" />
        <Column title="Done" tasks={tasks} stage="done" />
      </section>
      {openModal.open && <NewTask stage={openModal.stage} />}
    </main>
  );
}

export default App;
