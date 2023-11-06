import React from "react";
import chBoxFalse from "./assets/Unchecked.png";
import Checkbox from "./Checkbox.js";
import EditButton from "./EditButton.js";
import { useState } from "react";


function BuildList(){

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    
  
    
    function submitInput(e){
        
        e.preventDefault(); //stops page from reloading
       
        setTodos([
            ...todos,
            {   id: Math.floor(Math.random()*50),
                text: input,
                checkbox:chBoxFalse

            } //id , checkbox, text, edit
        ]);
       
        setInput(""); //reset input value
        
    }

 
    return(
        <>
                <div id= "taskName"><p>Tasks:</p></div>

                <div className="inputWList">

                        <form onSubmit={submitInput}>
                            <input type="text" class="form-control" placeholder="Enter task" value={input}
                            onChange ={(e) => {setInput(e.target.value) }}/>
                        </form>
                    
                        
                        
                            <ul>
                            {todos.map(task => (<li id={task.id}><img id={"cb"+task.id} src={task.checkbox} style={{width:'20px'}}/> {task.text}</li>))}
                            
                            </ul>
                            
                </div>
            

        </>



    );
   

}


export default BuildList;