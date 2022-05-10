import { gql, useMutation } from "@apollo/client";
import React from "react";
import Task from "./Task";
const DELETS_TASK = gql`
  mutation DeleteTask($input: String) {
    deleteTask(input: $input)
  }
`;
const TaskList = ({ theme, tasks, refetch }) => {
  const [deleteTask] = useMutation(DELETS_TASK);

  const taskToDelete = (id) => {
    deleteTask({
      variables: {
        input: id,
      },
    }).then(() => refetch());
  };

  return (
    <div
      className={`flex flex-col mt-6 ${
        theme ? "bg-veryLightGray" : "bg-veryDarkDesaturatedBlueDark"
      } py-1 rounded-md`}
    >
      <div className="h-72 overflow-scroll md:overflow-x-hidden">
        {tasks.map((task) => (
          <Task
            key={task._id}
            theme={theme}
            task={task}
            taskToDelete={taskToDelete}
          />
        ))}
      </div>

      <div className="flex items-center justify-between p-4 text-darkGrayishBlue">
        <div>{tasks.length} items left</div>
        <div>Clear Complited</div>
      </div>
    </div>
  );
};

export default TaskList;
