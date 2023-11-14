import React from "react";
import { useState } from "react";
import editButton from "./assets/pencil.svg";
import Pickr from "./Picker.js";


function BuildList(){

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
   
  
    function submitInput(e){
        
        e.preventDefault(); //stops page from reloading
        
        setTodos([
            ...todos,
           // Change id because duplicates can happen
            {   id: "TD1" + Math.floor(Math.random()*50),
                text: input          
            } 
        ]);
       
        setInput(""); //reset input value
        
    }

    function editText(e){
       
        for(let i =0; i < todos.length; i++){
            if(todos[i].id === e.target.id){
                let newText = prompt("Edit", todos[i].text);
                todos[i].text = newText;
            }
        }
        setTodos([...todos]);

    }

    function deleteListItem(e){
        if(e.target.checked === true){
            setTimeout(() => {
                setTodos(todos.filter(item => item.id !== e.target.id))

            },1000)
        }
        
    }


    return(
        <>
        <div className="col">
                    <div id= "taskName"><p>Tasks:</p></div>

                    <div className="inputWList">

                            <form onSubmit={submitInput}>
                                <input type="text" class="form-control" placeholder="Enter task" value={input}
                                onChange ={(e) => {setInput(e.target.value) }}/>
                            </form>
                        
                            
                                <ul>
                                    
                                {todos.map(task => (
                                    <li key={task.id}>
                                        <input type="checkbox" id={task.id} onClick={deleteListItem}></input>
                                        {task.text}
                                        <img src={editButton} alt="edit button" style={{width:"20px"}}  id={task.id} onClick={editText}/>

                                    </li>
                                ))}
                            
                                </ul>
                
                    </div>
        </div>
        <Pickr taskList = {todos}/>
               
        
        </>

    );
   

}

export default BuildList;