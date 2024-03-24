import "./css/user.css";
import { useState,useEffect } from "react";
function Ticket(props){
    const [aid,setAid]=useState(0);
    const [gid,setGid]=useState(0)
    const [ctime,setCtime]=useState('');
    const [ticket,setTicket]=useState(0);
    const [adata,setAdata]=useState([]);
    const [gdata,setGdata]=useState([]);
    const [vis,setVis]=useState();
    const[next,setNext]=useState(0);
    useEffect(()=>{
        fetch("http://localhost:2000/admin")
        .then(response=>{
            if(!response.ok) console.error('no response available')
            else{
        return response.json()}
        })
        .then(data=>{
            console.log(data);
            setAdata(data);
        })
        .catch(err=>{
            console.error(err);
        })
    },[]);
    
    var timing=[
        {time:"9:00AM to 12:00PM"},
        {time:"12:00PM to 3:00PM"},
        {time:"3:00PM to 6:00PM"}
    ]
    function admindata(id){
        setAid(id);
        fetch('http://localhost:2000/animalguidedetails',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                zid:id
            })
        })
          .then(response => {
            if(!response) console.error("cannot fetch data");
            return response.json();
          })
          .then(data=>{
            setGdata(data);
            console.log(data); 
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          }); 
        }
    function animalguidedata(id){
        setGid(id);
    }
    function amount(){
        let amt=70;
        return(
        amt*ticket
        )
    }
/*     var display=props.vis;
 */    function payment(){
        setNext(next+1)
        
 setVis('hidden');
        fetch('http://localhost:2000/ticket',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                cid:props.uid,
                zid:aid,
                gid:gid,
                time:ctime,
                ticket:ticket
            })
        })
    }
    
    if(next===0){
    return(
        <>
        <div class="ticket-entry" style={{"visibility":props.vis}}>
       <div className="admin-container">
            Welcome to our Ticket Booking service.Click next to reserve your Entry
            <button onClick={()=>{setNext(next+1)}}>Next</button>
        </div>
        </div>
        </>
    )}
    if(next===1){
        return(
            <>
            <div class="ticket-entry" style={{"visibility":props.vis}}>
            <div className="admin-container">
                <h1>Selected Your preffered Zoo</h1>
                <div className="admin-select">
                {adata.map(data=>(
                    <div onClick={()=>admindata(data.aid)} className="admin-content">{data.aname}</div>
                ))}
                </div>
            <button onClick={()=>{setNext(next+1)}}>Next</button>
            </div>
            </div>
            </>
        )}
        if(next===2){
            return(
                <>
                <div class="ticket-entry" style={{"visibility":props.vis}}>
                <div className="admin-container">
                   {aid} 
                    <h2>Select Animal guide</h2>
                    <div className="admin-select">
                {gdata.map(data=>(
                    <div onClick={()=>animalguidedata(data.gid)} className="admin-content">{data.gname}</div>
                ))}
                </div> 
                <button onClick={()=>{setNext(next+1)}}>Next</button>
                </div>
                </div>
                </>
            )}
            if(next===3){
                return(
                    <>
                    <div class="ticket-entry" style={{"visibility":props.vis}}>
                    <div className="admin-container">
                        {gid}
                        <h2>Select your Preffered timings</h2>
                        <div className="time">
                            {timing.map(time=>(
                                <div className="time-content" onClick={()=>setCtime(time.time)}>{time.time}</div>
                            ))}
                        </div>
                    <button onClick={()=>{setNext(next+1)}}>Next</button>
                    </div>
                    </div>
                    </>
                )}
                if(next===4){
                    return(
                        <>
                        <div class="ticket-entry" style={{"visibility":props.vis}}>
                        <div className="admin-container">
                        <h2>***PAYMENT***</h2>
                        <label>Enter Number Of Tickets</label><input type="number" value={ticket} onChange={(e)=>{setTicket(e.target.value)}}>
                        </input>
                        <label>Amount to be Paid</label>
                        {amount()}
                        <button onClick={()=>payment()}>Pay</button>
                        </div>
                        </div>
                        </>
                    )}
                    else{
                        /* setNext(0); */
                        return(
                            <>
                            <div class="ticket-entry" style={{"visibility":"hidden"}}></div>
                            </>
                        )
                    }
}
export default Ticket;