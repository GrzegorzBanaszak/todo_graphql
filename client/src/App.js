import AddTask from "./components/AddTask";
import light from "./images/bg-mobile-light.jpg";
import lightIcon from "./images/icon-moon.svg";
function App() {
  return (
    <main className="w-full h-screen relative">
      <div>
        <img src={light} alt="banner" />
      </div>
      <div className="absolute top-12 left-6 right-6">
        <header className="flex justify-between text-veryLightGray text-3xl">
          <h2>TODU</h2>{" "}
          <div>
            <img src={lightIcon} alt="toggle" />
          </div>
        </header>
        <AddTask />
      </div>
    </main>
  );
}

export default App;
