import React from "react";
import { useState } from "react";
import LiImage from "./assets/LiBox.png";
import "./PickrStyle.css";

function Picker(prop){
    const [pick, setPick] = useState("");

    function pickTask(){
        let index = Math.floor(Math.random()*prop.taskList.length);
        if(prop.taskList.length > 1){
            
            setPick(prop.taskList[index].text);
        }
        else{
            setPick("");
        }
        
       

    }

    

    return(
        <>

        <div className="col"><button onClick={pickTask}><span>PICK</span></button></div>
        <div className="col">
            <div id="pickrHeader"><p>Let's Start With:</p></div>
                <div className="pickedTaskBox">
                    <span id="pickedItem">
                    <img src={LiImage} style={{width:"10px"}} alt="bullet point"/>{pick}
                    </span>
               
                </div>

        </div>
          
        
        
        
        </>
    );

}

export default Picker;