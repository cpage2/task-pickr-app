import React from "react";
import { useState } from "react";


function BuildList(){

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    
  
    function submitInput(e){
        
        e.preventDefault(); //stops page from reloading
       
        setTodos([
            ...todos,
            {   id: "TD1" + Math.floor(Math.random()*50),
                text: input,
                
 
            } 
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
                                
                            {todos.map(task => (
                                <li key={task.id}>
                                    <input type="checkbox" id={task.id} onChange={(e) => { if(e.target.checked === true){setTodos(todos.filter(item => item.id !== e.target.id))}}}></input>
                                    {task.text}
                                </li>
                            ))}
                          
                             
                            
                            </ul>
                           
                            
                </div>
            

        </>



    );
   

}


export default BuildList;