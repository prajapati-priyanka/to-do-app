import React from "react";
import BtnToggleCompleted from "./BtnToggleCompleted";
import DeleteTaskBtn from "./DeleteTaskBtn";
import EditTaskBtn from "./EditTaskBtn";

const TaskActionItem = ({ task }) => {
  return (
    <div
      className={`flex border-dashed border-slate-200 border-t-2 w-full pt-4 mt-4
    }`}
    >
      <BtnToggleCompleted />
      <DeleteTaskBtn taskId={task.id} />
      <EditTaskBtn task={task} />

      {/* <BtnMarkAsImportant taskId={task.id} taskImportant={task.important} />
    <BtnDeleteTask taskId={task.id} />
    <BtnEditTask task={task} /> */}
    </div>
  );
};

export default TaskActionItem;
