import React from "react";
import Checkbox from "./Checkbox.js";
import EditButton from "./EditButton.js";
import { useState } from "react";


function BuildList({inputData}){
    const[listItem, setListItem] = useState("");

    function listCreation(){
        //take checkbox, input, and edit button and create list item with unique id
        /**
         * create label
         * create list item (document.createElement('li'))
         */
        


    }

    return(
        <>
            <ul>
                {listCreation()}
            </ul>
        
        
        </>
    );


}


export default BuildList;