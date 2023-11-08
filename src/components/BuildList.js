import React from "react";
import chBoxFalse from "./assets/Unchecked.png";
import chBoxTrue from "./assets/Checked.png";
import Checkbox from "./Checkbox.js";
import EditButton from "./EditButton.js";
import { useState } from "react";


function BuildList(){

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [chbox, setChBox] = useState(chBoxFalse);
    
  
    
    function submitInput(e){
        
        e.preventDefault(); //stops page from reloading
       
        setTodos([
            ...todos,
            {   id: Math.floor(Math.random()*50),
                text: input
                

            } //id , checkbox, text, edit
        ]);
       
        setInput(""); //reset input value
        
    }

    function removeListItem(id){
        //delete all items with corresponding ids
        //find chBox with same id and only setChbox it
        setChBox(chBoxTrue);
        let index = 0;
       for(let i = 0; i < todos.length; i++){
                if(todos.at(i).id === id){
                    index = i;
                }
       }
       
        console.log(index);

        // setTimeout(()=>{
        //     let l = document.querySelector("#"+id);

        //     let index = todos.findIndex(id);
        
        //     todos.splice(index,1);
     
        //     l.remove();


        // }
            
            
            
        //     ,1000);

        
    }

 
    return(
        <>
                <div id= "taskName"><p>Tasks:</p></div>

                <div className="inputWList">

                        <form onSubmit={submitInput}>
                            <input type="text" class="form-control" placeholder="Enter task" value={input}
                            onChange ={(e) => {setInput(e.target.value) }}/>
                        </form>
                    
                        
                        
                            {/* <ul>
                            {todos.map(task => (<li id={task.id}><Checkbox idNum = {task.id}/> {task.text}</li>))}
                            
                            </ul> */}
                            <ul>
                            {todos.map(task => (<li id={task.id}>
                                <img src= {chbox} style={{width: "20px"}} alt= "checkbox" id = {"ch"+task.id} onClick={() =>{removeListItem(task.id)}}/> 
                                {task.text}</li>))}
                            
                            </ul>
                            
                </div>
            

        </>



    );
   

}


export default BuildList;