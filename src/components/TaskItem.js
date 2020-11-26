import React from "react";
const TaskItem = ({ task,onCheck }) => <li><input type="checkbox" checked={task.isCompleted} onClick={()=>onCheck(task.id)}/>{task.title} </li>;

export default TaskItem;
