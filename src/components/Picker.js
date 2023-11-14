import React from "react";
import { useState } from "react";

function Picker(prop){
    const [pick, setPick] = useState("");

    function pickTask(){
        let index = Math.floor(Math.random()*prop.taskList.length);
        setPick(prop.taskList[index].text);

    }

    

    return(
        <>

        <div className="col"><button onClick={pickTask}><span>PICK</span></button></div>
        <div className="col">
            <div id="pickrHeader"><p>Let's Start With:</p></div>
                <div className="pickedTaskBox">
                    <p>{pick}</p>
                    
                </div>

        </div>
          
        
        
        
        </>
    );

}

export default Picker;