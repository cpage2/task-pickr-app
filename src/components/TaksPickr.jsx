import "./TaskPickr.css";
import BubbleSquare from './images/bubbleSquare.png';
import NightSquare from './images/nightSquare.png';


function TaskPickr (){




    return(
        <>
        
        
        <div className="container">
            <ul className="nav">
                <li id="tpName"><p id="logo">TASK PICKR</p></li>
                <li id="login"><a href="#" id="lg"><button id="loginB">Login</button></a></li> 

            </ul>

        </div>
        
        <div className="container">
                <div className="row ">
                    
                    <div className="col-md" id="taskCol">
                        <div className="card " style={{width: "18rem"}}>

                            <div className="card-body">
                                    <div className="highPriority">
                                        <h5 className="card-title">High Priority</h5>
                                        <ul className="list-group list-group-flush" id="hpList">
                                            <li className="list-group-item" id="hpTask"><input type="text" id="hp" placeholder="Enter task"></input></li>
                                        </ul>

                                    </div>

                                     <div className="line"></div>

                                    <div className="lowPriority">
                                        <h5 className="card-title">Low Priority</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item" id="lpTask"><input type="text" id="lp" placeholder="Enter task"></input></li>

                                        </ul>

                                    </div>
                            </div>


                        </div>

                    </div>
                    


                    <div className="col-md" id="buttonCol">
                        <button type="button" className="pick">pick</button>
                    </div>



                   
                    <div className="col-md" id="pickedCol">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Let's Start With:</h5>
                                <ul className="pickedTasks">
                                    <li id="item1"></li>
                                    <li id="item2"></li>
                                </ul>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <div className="themeChanger">
                <h3>Pick A Theme</h3>
                <div className="themeButtons">

                        <img src={BubbleSquare} id="bubbles" alt="bubble" style={{width: "100px"}}></img>

                        <img src={NightSquare} id="night" alt="night" style={{width: "100px"}}></img>
                        


                 </div>


            </div>

                <footer> 
                    <p id="credit">Photo by <a href="https://unsplash.com/@andyjh07?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andy Holmes</a> on <a href="https://unsplash.com/photos/rCbdp8VCYhQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


                    </p>
                </footer>
    </>);


}


export default TaskPickr;