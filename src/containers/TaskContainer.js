import React, { Component } from "react";
import TaskList from '../components/Tasklist';
import AddTask from '../components/AddTask';
import Filters from '../components/Filters'
 const filter ={
        complete:"completed",
        uncompleted:"uncompleted",
        all_tasks:"all_tasks"
    }
export default class TaskContainer extends Component {
   

  constructor() {
    super();
    this.state = {
      tasklist: [
        { id: String(1), title: "job1",isCompleted:true },
        { id: String(2), title: "job2",isCompleted:false },
      ],
      currentfilter: filter.all_tasks
    };
  }

  addTask = (title)=>{
      this.setState
          (
               {
                 tasklist:[...this.state.tasklist,{id:String(Math.random()),title:title,isCompleted:false}]
               }
          )
  }

  onCheck = (taskid)=>{
      const newList = this.state.tasklist.map(task=>{
          if(task.id == taskid){
              return {...task,isCompleted:!task.isCompleted}
          }
          return task;
      })

      this.setState({tasklist: newList})
  }

  changeFilter = (newFilter) =>{

        this.setState({currentfilter : newFilter})
     

  } 

  get currentList(){
     let cfilter = this.state.currentfilter;
     switch(cfilter){
         case filter.all_tasks:
             return this.state.tasklist;
             
         case filter.complete:
             return this.state.tasklist.filter(task => task.isCompleted); 
             
         case filter.uncompleted:
             return this.state.tasklist.filter(task => !task.isCompleted);   
             
         default:
             return this.state.tasklist ;         

     }
  }
  render() {
      console.log(this.state.currentfilter)
    return (
      <div>
          <Filters changeFilter={this.changeFilter} currentfilter={this.state.currentfilter}/>
      <AddTask addtask={this.addTask} />  
      <TaskList TaskList={this.currentList} onCheck={this.onCheck}/>
      </div>
    );
  }
}
