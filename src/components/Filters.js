import React from 'react';

const filter ={
    complete:"completed",
    uncompleted:"uncompleted",
    all_tasks:"all_tasks"
}

const Filters = ({changeFilter,currentfilter}) =>(
    <div>
        <button onClick={()=>changeFilter(filter.all_tasks)} style={{background : currentfilter ===  filter.all_tasks ? "gray" : "inherit"}}>ALL</button>
        <button onClick={()=>changeFilter(filter.complete)} style={{background : currentfilter ===  filter.completed ? "gray" : "inherit"}}>COMPLETED</button>
        <button onClick={()=>changeFilter(filter.uncompleted)} style={{background : currentfilter ===  filter.uncompleted ? "gray" : "inherit"}}>UNCOMPLETED</button>
    </div>
)

export default Filters