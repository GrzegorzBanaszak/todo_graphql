import React from "react";

const AddTask = () => {
  return (
    <div
      className="flex mt-6 bg-veryLightGray p-3 rounded-md space-x-3 items-center
    "
    >
      <div className="w-6 h-6 ml-3 border-2 rounded-full"></div>
      <input
        type="text"
        placeholder="Create a new todu..."
        className="border-none focus:outline-none bg-veryLightGray text-sm"
      />
    </div>
  );
};

export default AddTask;
