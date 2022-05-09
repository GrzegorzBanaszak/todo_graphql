import React from "react";

const AddTask = ({ theme }) => {
  return (
    <div
      className={`flex mt-7 ${
        theme ? "bg-veryLightGray" : "bg-veryDarkDesaturatedBlueDark"
      } p-3 rounded-md space-x-3 items-center`}
    >
      <div
        className={`w-6 h-6 ml-3 border rounded-full ${
          theme ? "border-darkGrayishBlue" : "border-darkGrayishBlueDark"
        }`}
      ></div>
      <input
        type="text"
        placeholder="Create a new todu..."
        className={`border-none focus:outline-none bg-transparent text-sm ${
          theme
            ? "placeholder:text-darkGrayishBlue"
            : "placeholder:text-darkGrayishBlueDark"
        }`}
      />
    </div>
  );
};

export default AddTask;
