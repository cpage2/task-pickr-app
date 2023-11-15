import "./TaskPickr.css";
import React from "react";
import logo from "./components/assets/LogoW.png";
import BuildList from "./components/BuildList.js";




function TPMain (){

   


    return(
        
        <>
    
        <div id="logo"><img src={logo} style={{width: '160px'}} alt = "Task Pickr" /></div>
        
        <div className="container text-center">
            <div className="row">
                <BuildList/>     
            </div>
        </div>
        <footer></footer>
        
         
        
       
                   

            
    </>);

    


}


export default TPMain;

