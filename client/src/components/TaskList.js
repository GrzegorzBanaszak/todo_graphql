import React from "react";
import Task from "./Task";

const TaskList = ({ theme }) => {
  return (
    <div
      className={`flex flex-col mt-6 ${
        theme ? "bg-veryLightGray" : "bg-veryDarkDesaturatedBlueDark"
      } py-1 rounded-md divide-y divide-darkGrayishBlueDark`}
    >
      <Task theme={theme} />
      <Task theme={theme} />
      <Task theme={theme} />
    </div>
  );
};

export default TaskList;
