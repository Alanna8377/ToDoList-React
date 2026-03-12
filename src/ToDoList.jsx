import React, { useState} from 'react'

function ToDoList(){

    //tasks will be an array of strings
    const [tasks, setTasks] = useState([]);
    //newTask is whatever we are currently editing with the textbox
    const [newTask, setNewTask] = useState("")

    //for a textbox when we input something
    function handleInputChange(event){

    }

    function addTask(){

    }

    //index will be the index of the list item we would like to delete
    function deleteTask(index){

    }

    //index is the index of the list item we would like to move up
    function moveTaskUp(index){

    }

    //index is the index of the list item we would like to move down
    function moveTaskDown(index){

    }

    return(
    <div className='to-do-list'>

        <h1>To Do List</h1>

    </div>
    );
}
export default ToDoList