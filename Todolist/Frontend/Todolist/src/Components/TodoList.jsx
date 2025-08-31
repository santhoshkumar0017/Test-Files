import React, { useEffect, useState } from 'react'
import { addTask, getList, removeList, updateList } from '../Service/ServiceScript'

function TodoList() {

   const [task,setTask]=useState("");
   const [list,setTodoList]=useState([]);
  
 useEffect(() =>{
    GetTodoList();
 },[])

   function GetTodoList(){
    getList().then((response =>{
        setTodoList(response.data)
        console.log(list)
    })).catch(err => console.log(err))
   } 


    function AddTaskFunction(e){
        e.preventDefault();
        let completed=false;
        const todoList={
            completed ,
            task
        }
        
        addTask(todoList).then((respone =>{
            console.log(respone.json);
            GetTodoList();
         const input = document.getElementById("taskInput");
         input.value=""
        })).catch(err => console.log(err))
    }

    function UpdateTask(id){
        updateList(id).then((respone =>{
            console.log("work")
            GetTodoList();
            
        })).catch(err => console.log(err))
    }
    
    function RemoveTask(id){
       removeList(id).then((respone =>{
        console.log("task deleted")
        GetTodoList();
       })).catch(err => console.log(err))
    }

  return (
   <>
    <div className='container text-center d-flex alignment-items-center  justify-content-center'>
        <div className='row'>
            <div className='column '>
                 <div className='card m-5 rounded shadow shadow-lg col-lg-12'>
                       <div className='cart-title '>
                            Todo List
                       </div>

                       <div className='card-body'>
                           <input id='taskInput' type="text" placeholder='Enter the task' required 
                           onChange={(e) => setTask(e.target.value)}/> 
                           <span></span> <span></span>
                           <button className='btn btn-info' onClick={AddTaskFunction}>Add</button>
                       </div>

                          
                             <table  className='table table-striped table-bordered '> 
                                 
                                 <thead>
                                    <tr>
                                        <td>Status</td>
                                        <td>Task</td>
                                        <td>Remove</td>
                                    </tr>
                                 </thead>

                                 <tbody>                   
                                
                               {
                                   list.map(item => (
                                            <tr key={item.id}>
                                                <td>
                                                 <a href='#'  onClick={() => UpdateTask(item.id)}>

                                                <i className={item.completed ? "bi bi-check-circle-fill check-icon" : 
                                                    "bi bi-circle unchecked-icon"}></i></a>
                                                </td> 

                                                <td className={item.completed ?'pending ': ''}>
                                                    {item.task}</td>

                                                <td> 
                                                    <a href="#" onClick={() => RemoveTask(item.id)}>
                                                    <i className='bi bi-trash'></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                        
                                 }
                                 </tbody>
                                 
                             </table>

                 </div>
            </div>
        </div>

    </div>
   
   </>
  )
}

export default TodoList