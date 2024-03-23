import "./css/user.css";
import { useState } from "react";
function Ticket(props){
    const[next,setNext]=useState(0);
    function sample(){
        return(
            <div>hello</div>
        )
    }
    if(next===0){
    return(
        <>
        <div class="ticket-entry" style={{"visibility":props.vis}}>
            Welcome to Ticket Booking service.click on next to reserve your seat
            <button onClick={()=>{setNext(next+1)}}>Next</button>
        </div>
        </>
    )}
    if(next===1){
        return(
            <>
            <div class="ticket-entry" style={{"visibility":props.vis}}>
                1
            <button onClick={()=>{setNext(next+1)}}>Next</button>
            </div>
            </>
        )}
        if(next===2){
            return(
                <>
                <div class="ticket-entry" style={{"visibility":props.vis}}>
                    2
                <button onClick={()=>{setNext(next+1)}}>Next</button>
                </div>
                </>
            )}
            if(next===3){
                return(
                    <>
                    <div class="ticket-entry" style={{"visibility":props.vis}}>
                        3
                    <button onClick={()=>{setNext(next+1)}}>Next</button>
                    </div>
                    </>
                )}
                if(next===4){
                    return(
                        <>
                        <div class="ticket-entry" style={{"visibility":props.vis}}>
                            4
                        <button onClick={()=>{setNext(next+1)}}>Next</button>
                        </div>
                        </>
                    )}
}
export default Ticket;