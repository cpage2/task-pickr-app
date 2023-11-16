import "./TaskPickr.css";
import React from "react";
import logo from "./components/assets/LogoW.png";
import BuildList from "./components/BuildList.js";


function TPMain (){

    return(
        
        <>
        <div className="body-container">
            <div id="content-wrap">
                    <div id="logo"><img src={logo} style={{width: '160px'}} alt = "Task Pickr" /></div>
                    
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <BuildList/>     
                        </div>
                    </div>
                    
                    <div className="footer"></div>


            </div>
           

        </div>
    
       
         
        </>
    );

}


export default TPMain;

