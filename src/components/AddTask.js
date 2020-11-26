import React , {Component} from 'react'

export default class AddTask extends Component{
    constructor(props){
        super(props)
        this.state = {
            tasktitle : ''
        }
    }

    onChangeTitle = (e) => this.setState({tasktitle : e.target.value});
    onAddTask = () =>{
        if(this.state.tasktitle.length>0){

            this.props.addtask(this.state.tasktitle);
            this.setState({tasktitle:""});
        }else{
            alert('title length should be greater than 0')
        }
    } 
    

    render(){
        return (
            <div>
            <input placeholder="task title .." type="text" value={this.state.tasktitle} onChange={this.onChangeTitle}></input>
            <button onClick={this.onAddTask} >Add Task</button>
            </div>
        )
    }

}