import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";

const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput) {
    createTask(input: $input) {
      text
    }
  }
`;

const AddTask = ({ theme, refetch }) => {
  const [text, setText] = useState("");
  const [createTask] = useMutation(CREATE_TASK);
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      createTask({
        variables: {
          input: { text },
        },
      }).then(() => refetch());
      setText("");
    }
  };
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
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleEnterPress}
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
