import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, setTodos,filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((el) => (
          <Todo
           text={el.text} 
           key={el.id} 
           todos={todos}
           el = {el}
            setTodos={setTodos} 
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
