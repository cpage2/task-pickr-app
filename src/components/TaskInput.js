import React from "react";
import { useState } from "react";
import BuildList from "./BuildList.js";

function TaskInput(){
    //input bar --> sends value to var to  Buildlist
   
    const [input, setInput] = useState("");
    
    
    
    function submitInput(e){
        
        e.preventDefault(); //stops page from reloading
      
        setInput(""); //reset input value
       


        
    }

  
        
    


     

    return(
        <>
        <form onSubmit={submitInput}>
            <input type="text" class="form-control" placeholder="Enter task" value={input} onChange={(e) => setInput(e.target.value)} />
        </form>

         

       
          <BuildList inputData = {input} /> 

        

       

          
    
        </>



    );
   

}



export default TaskInput;