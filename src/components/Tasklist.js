import React from 'react';
import TaskItem from '../components/TaskItem'
const TaskList = ({TaskList,onCheck}) => {
    return (
    <ul>
        {TaskList.map((task) =>(<TaskItem key={task.id} onCheck={onCheck} task={task}/>) )}
    </ul>
    )

}

export default TaskList;