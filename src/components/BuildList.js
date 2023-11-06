import React from "react";
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
            {text: input} //id , checkbox, text, edit
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
                            {todos.map(task => (<li>{"t: " + task.text}</li>))}
                            
                            </ul>
                </div>
            

        </>



    );
   

}


export default BuildList;