import React from "react";
import closeIcon from "../images/icon-cross.svg";
const Task = ({ theme, task }) => {
  return (
    <div className="flex items-center py-4 task-border">
      <div
        className={`w-6 h-6 ml-6 border rounded-full ${
          theme ? "border-darkGrayishBlue" : "border-darkGrayishBlueDark"
        }`}
      ></div>
      <p
        className={` bg-transparent text-sm ml-3 ${
          theme ? "text-darkGrayishBlue" : "text-lightGrayishBlue"
        }`}
      >
        {task.text}
      </p>
      <div className="justify-self-end ml-auto mt-0 mr-4 mb-0">
        <img src={closeIcon} alt="close" />
      </div>
    </div>
  );
};

export default Task;
