import "./css/user.css";
import { useState } from "react";
function Ticket(props){
    const [tvis,setTvis]=useState('');
    const[next,setNext]=useState(0);
    if(next===0){
    return(
        <>
       <div>
            Welcome to our Ticket Booking service.Click next to reserve your Entry
            <button onClick={()=>{setNext(next+1)}}>Next</button>
        </div>
        </>
    )}
    if(next===1){
        return(
            <>
            <div>
                1
            <button onClick={()=>{setNext(next+1)}}>Next</button>
            </div>
            </>
        )}
        if(next===2){
            return(
                <>
                <div>
                    2
                <button onClick={()=>{setNext(next+1)}}>Next</button>
                </div>
                </>
            )}
            if(next===3){
                return(
                    <>
                    <div>
                        3
                    <button onClick={()=>{setNext(next+1)}}>Next</button>
                    </div>
                    </>
                )}
                if(next===4){
                    return(
                        <>
                        <div>
                            4
                        <button onClick={()=>{setNext(next+1)}}>Next</button>
                        </div>
                        </>
                    )}
                    else{
                        props.vis('hidden');
                        return(
                            <>
                            
                            </>
                        )
                    }
}
export default Ticket;