import React from "react";
import TaskInput from "./TaskInput.js";
import BuildList from "./BuildList.js";

function TaskList(){
    return(
        <>
        <div id= "taskName"><p>Tasks:</p></div>
        {/**Task List (will edit bg in css)
         * Input
         * Tasks (box , input value, edit button)
         */}

         <div className="tasksWinput">
            <TaskInput/>
            {/* <BuildList/> */}
         </div>
        
    
        
        
        
        </>



    );
  

}

export default TaskList;