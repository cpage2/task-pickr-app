import "./TaskPickr.css";
import React from "react";
import Picker from "./components/Picker.js";
import logo from "./components/assets/Logo.png";
import BuildList from "./components/BuildList.js";




function TPMain (){

   


    return(
        
        <>
        <div id="logo"><img src={logo} style={{width: '150px'}} alt = "Task Pickr" /></div>
        
        <div class="container text-center">
            <div class="row">
                <div class="col"><BuildList/></div>
                <div class="col"><Picker/></div>
            </div>
        </div>
        
         
        
       
                   

            
    </>);

    


}


export default TPMain;

//