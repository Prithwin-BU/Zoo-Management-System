import './css/user.css';
import { useState,useEffect } from 'react';
function Viewticket(props){
    const [vis,setVis]=useState();
    var display=props.vis;
    console.log(display);
    function send(){
        display='hidden';
        console.log(display);
    }
    return(
        <>
        <div className="view-ticket" style={{"visibility":display}}>
            you are in view ticket component
            <button onClick={send}>Ok</button>
            </div>
        
       
        </>
    )
}
export default Viewticket;