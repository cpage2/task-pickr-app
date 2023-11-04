import "./TaskPickr.css";
import React from "react";
import TaskList from "./components/TaskList.js";
import Picker from "./components/Picker.js";
import logo from "./components/assets/Logo.png";




function TPMain (){

   


    return(
        
        <>
        <div id="logo"><img src={logo} style={{width: '150px'}} alt = "Task Pickr" /></div>
        
        <div class="container text-center">
            <div class="row">
                <div class="col"><TaskList/></div>
                <div class="col"><Picker/></div>
            </div>
        </div>
        
         
        
       
                   

            
    </>);

    


}


export default TPMain;

//