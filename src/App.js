import { Schedule } from "./schedule";
import "./app.css";

export function App() {
  return (
    <main className="app">
      <header>
        <h1 id="title">Accessibility Week 2022</h1>
        <p>from Monday 16th May to Friday 20th May</p>
      </header>
      <Schedule />
    </main>
  );
}
