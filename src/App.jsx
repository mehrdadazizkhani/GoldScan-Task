import { useContext } from "react";
import Column from "./components/Column";
import { TaskContext } from "./context/TaskProvider";

function App() {
  const { tasks } = useContext(TaskContext);

  return (
    <main className="min-h-[100dvh] w-full flex-col gap-2 bg-slate-500 p-4">
      <header className="container m-auto mb-4 flex justify-between rounded-lg bg-slate-800 p-4 text-slate-200">
        <span>GoldScan</span>
        <span>2023</span>
      </header>
      <section className="container m-auto flex w-full flex-col gap-2 md:flex-row">
        <Column title="To DO" cards={tasks} stage="todo" />
        <Column title="Doing" cards={tasks} stage="doing" />
        <Column title="Done" cards={tasks} stage="done" />
      </section>
    </main>
  );
}

export default App;
