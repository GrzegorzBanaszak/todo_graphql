import AddTask from "./components/AddTask";
import light from "./images/bg-mobile-light.jpg";
import dark from "./images/bg-mobile-dark.jpg";
import lightIcon from "./images/icon-sun.svg";
import darkIcon from "./images/icon-moon.svg";
import { useState } from "react";
import TaskList from "./components/TaskList";
function App() {
  const [theme, setTheme] = useState(false);
  return (
    <main
      className={`w-full h-screen relative ${
        theme ? "bg-veryLightGrayishBlue" : "bg-veryDarkBlue"
      }`}
    >
      <div>
        <img src={theme ? light : dark} alt="banner" />
      </div>
      <div className="absolute top-12 left-6 right-6">
        <header className="flex justify-between text-veryLightGray text-3xl">
          <h2 className="font-bold tracking-widest">TODU</h2>
          <div>
            <img
              src={theme ? lightIcon : darkIcon}
              alt="toggle"
              onClick={() => setTheme((prev) => !prev)}
            />
          </div>
        </header>
        <AddTask theme={theme} />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
