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
        <div class="w-100"></div>
        <div className="col-sm"><button onClick={pickTask}><span>PICK</span></button></div>
        <div class="w-100"></div>
        <div className="col-sm">
                <div className="pickedContainer">
                    <div id="pickrHeader"><p>Let's Start With:</p></div>
                    <br></br>
                        <div className="pickedTaskBox">
                            <span id="pickedItem">
                            <img src={LiImage} style={{width:"10px"}} alt="bullet point"/>{pick}
                            </span>
                    
                    </div>

                </div>
               


           
            
        </div>
          
        
        
        
        </>
    );

}

export default Picker;