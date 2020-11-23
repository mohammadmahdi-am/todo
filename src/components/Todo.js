import React from "react";

const Todo = ({text,todos,el,setTodos}) => {
    const deleteHandler = () =>{
        setTodos(todos.filter(item => item.id !== el.id))


    }

    const completeHandler = () =>{
        setTodos(todos.map( item => {

            if(item.id === el.id){
              return {
                  ...item,completed:!item.completed
              }
            }
            return item
        
        }))

    }
  return (
      <div className="todo">
          <li className={`todo-item ${el.completed? "completed" : " "} `}>{text}</li>
          <button className="complete-btn" onClick={completeHandler} ><i className="fas fa-check"></i></button>
          <button className="trash-btn" onClick={deleteHandler} ><i className="fas fa-trash"></i></button>
          
      </div>

  );
};


export default Todo