import React from "react";
import Checkbox from "./Checkbox.js";
import EditButton from "./EditButton.js";
import { useState } from "react";


function BuildList({inputData}){

    let task = []

    task.push(inputData);
   
    const[listItem, setListItem] = useState(
        {
            id: '',
            chBox: '',
            taskText: '',
            editButton: ''
            
        }
    
    );

    const l = task.map(item => <li>{item}</li>);

    function create(){
        
    }
    
   

   
        //take checkbox, input, and edit button and create list item with unique id
        /**
         * create label
         * create list item (document.createElement('li'))
         */

        

        
        


    

    return(
        <>
            {/* <p>{inputData}</p> */}

            <ul>{l}</ul>
        
        
        </>
    );


}


export default BuildList;