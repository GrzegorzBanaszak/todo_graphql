import React from "react";
import Task from "./Task";

const TaskList = ({ theme, tasks }) => {
  console.log(tasks);
  return (
    <div
      className={`flex flex-col mt-6 ${
        theme ? "bg-veryLightGray" : "bg-veryDarkDesaturatedBlueDark"
      } py-1 rounded-md`}
    >
      <div className="h-72 overflow-scroll md:overflow-x-hidden">
        {tasks.map((task) => (
          <Task theme={theme} />
        ))}
      </div>

      <div className="flex items-center justify-between p-4 text-darkGrayishBlue">
        <div>6 items left</div>
        <div>Clear Complited</div>
      </div>
    </div>
  );
};

export default TaskList;
