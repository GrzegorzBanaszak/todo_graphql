import React from "react";

const TypeSelect = ({ theme }) => {
  return (
    <div
      className={`flex justify-center mt-6 ${
        theme ? "bg-veryLightGray" : "bg-veryDarkDesaturatedBlueDark"
      } py-4 rounded-md`}
    >
      <p
        className={` bg-transparent text-sm ml-3 ${
          theme ? "text-darkGrayishBlue" : "text-lightGrayishBlue"
        }`}
      >
        All
      </p>
      <p
        className={` bg-transparent text-sm ml-3 ${
          theme ? "text-darkGrayishBlue" : "text-lightGrayishBlue"
        }`}
      >
        Active
      </p>
      <p
        className={` bg-transparent text-sm ml-3 ${
          theme ? "text-darkGrayishBlue" : "text-lightGrayishBlue"
        }`}
      >
        Completed
      </p>
    </div>
  );
};

export default TypeSelect;
