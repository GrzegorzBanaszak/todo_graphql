import React from "react";
import closeIcon from "../images/icon-cross.svg";
import doneIcon from "../images/icon-check.svg";
const Task = ({ theme, task, taskToDelete }) => {
  return (
    <div className="flex items-center py-4 task-border">
      <div
        className={`w-6 h-6 ml-6 border rounded-full ${
          task.isDone && "bg-blue-600 flex items-center justify-center"
        } ${
          theme ? "border-darkGrayishBlue" : "border-darkGrayishBlueDark"
        } hover:cursor-pointer`}
      >
        {task.isDone && <img src={doneIcon} alt="is-done" />}
      </div>
      <div
        className={`relative bg-transparent text-sm ml-3 ${
          task.isDone
            ? "text-lightGrayishBlueDark"
            : theme
            ? "text-darkGrayishBlue"
            : "text-lightGrayishBlue"
        }`}
      >
        {task.text}
        {task.isDone && (
          <div className="h-pix w-80 bg-lightGrayishBlueDark absolute top-1/2 -translate-y-1/2"></div>
        )}
      </div>
      <div className="ml-auto mt-0 mr-4 mb-0 hover:cursor-pointer">
        <img
          src={closeIcon}
          alt="close"
          onClick={() => taskToDelete(task._id)}
        />
      </div>
    </div>
  );
};

export default Task;
