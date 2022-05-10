import AddTask from "./components/AddTask";
import lightMobile from "./images/bg-mobile-light.jpg";
import darkMobile from "./images/bg-mobile-dark.jpg";
import lightDesktop from "./images/bg-desktop-light.jpg";
import darkDesktop from "./images/bg-desktop-dark.jpg";
import lightIcon from "./images/icon-sun.svg";
import darkIcon from "./images/icon-moon.svg";
import { useState } from "react";
import TaskList from "./components/TaskList";
import TypeSelect from "./components/TypeSelect";
import { useEffect } from "react";
//Apollo imports
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_TASKS = gql`
  query Query {
    getTasks {
      _id
      text
      isDone
    }
  }
`;

function App() {
  const [theme, setTheme] = useState(true);
  const { data, loading, refetch } = useQuery(QUERY_ALL_TASKS);
  const [windowWidht, setWindowWidth] = useState(window.innerWidth);

  const getWitdhtOnResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const changeThemeLight = () => {
    if (windowWidht > 1024) {
      return lightDesktop;
    } else {
      return lightMobile;
    }
  };

  const changeThemeDark = () => {
    if (windowWidht > 1024) {
      return darkDesktop;
    } else {
      return darkMobile;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", getWitdhtOnResize);

    return () => {
      window.removeEventListener("resize", getWitdhtOnResize);
    };
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }
  return (
    <main
      className={`w-full h-screen relative ${
        theme ? "bg-veryLightGrayishBlue" : "bg-veryDarkBlue"
      }`}
    >
      <div>
        <img
          className="w-full"
          src={theme ? changeThemeLight() : changeThemeDark()}
          alt="banner"
        />
      </div>
      <div className="absolute top-12 left-6 right-6 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 max-w-screen-sm">
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
        <AddTask theme={theme} refetch={refetch} />
        <TaskList theme={theme} tasks={data.getTasks} refetch={refetch} />
        <TypeSelect theme={theme} />
      </div>
    </main>
  );
}

export default App;
