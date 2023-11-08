import React from "react";
import chBoxFalse from "./assets/Unchecked.png";
import chBoxTrue from "./assets/Checked.png";
import { useState } from "react";



function Checkbox(){
    //start uncheck state
    const [chBox, setChBox] = useState(chBoxFalse);


   
          return   <img src ={chBox} alt="checkbox" style={{width: '20px'}} onClick={
            ()=> setChBox(chBoxTrue)
          }/>;
        
        
 

}

export default Checkbox;