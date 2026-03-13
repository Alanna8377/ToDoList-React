import React, { useState} from 'react'

function ToDoList(){

    //tasks will be an array of strings
    const [tasks, setTasks] = useState([]);
    //newTask is whatever we are currently editing with the textbox
    const [newTask, setNewTask] = useState("")

    //for a textbox when we input something
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
    //checks if there is text to be added, if not, no new task is added
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    //index will be the index of the list item we would like to delete
    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    //index is the index of the list item we would like to move up
    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    //index is the index of the list item we would like to move down
    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
    <div className='to-do-list'>

        <h1>To Do List</h1>

        <div>
            <input
            type="text"
            placeholder='Enter a task...'
            value={newTask}
            onChange={handleInputChange}/>

            <button className="add-button" onClick={addTask}>Add</button>
        </div>

        <ol>
        {tasks.map((task, index) => 
            <li key={index}>
                <span className='text'>{task}</span>

                <button
                className='delete-button'
                onClick={() => deleteTask(index)}>
                Delete
                </button>

                <button className='move-button'
                onClick={() => moveTaskUp(index)}>
                Move Up
                </button>

                <button className='move-button'
                onClick={() => moveTaskDown(index)}>
                Move Down
                </button>

            </li>
        )}
     </ol>
    </div>
   

    );
}
export default ToDoList