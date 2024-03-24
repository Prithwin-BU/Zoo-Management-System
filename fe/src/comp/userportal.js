import "./css/user.css";
import Ticket from "./ticket";
import { useNavigate } from "react-router-dom";
import {useState,useEffect, version} from 'react';
import Viewticket from "./viewticket";
function Userportal(props){
    const[tvis,setTvis]=useState('hidden');
    const [ticket,setTicket]=useState(0);
    const [vticket,setVTicket]=useState('hidden');
    const [cid,setCid]=useState(0);
    const [gid,setGid]=useState(0);
    const [time,setTime]=useState('');
    const [zid,setZid]=useState(0);

    useEffect(()=>{
        fetch("http://localhost:2000/customerid",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                cid:props.id
            })
        })
        .then((response)=>{
            if(!response.ok) console.log("no response");
            else{
                return response.json();
            }
        })
        .then(data=>{
            setTicket(data[0].ticket);
            setCid(data[0].cid);
            setGid(data[0].gid);
            setTime(data[0].time);
            setZid(data[0].zid);
            console.log(data[0].ticket);
            console.log(cid);
        })
        .catch(err=>{
            console.log(err);        })
    },[])
    const nav=useNavigate();
    function visibility(data){
        setTvis(data);
    }
    return(
        <>
        <nav>
            <center><h1>Welcome....{props.name}</h1></center>
        <div className="profile">profile
        <div className="profile-details">Name:{props.name}</div>
        <div className="profile-details">Email:{props.email}</div>
        <div className="profile-details">Phone:{props.phone}</div>
        <div className="profile-details">Address:{props.add}</div>
        <div className="profile-details">Customer ID:{props.id}</div>
        <div  className="profile-details" onClick={()=>{nav('/')}}>Logout</div>
        </div>
        </nav>
        <section className="book-ticket">
            {ticket > 0?
            (<div onClick={()=>setVTicket('visible')}><center>View Ticket</center></div>):
            (<div onClick={()=>setTvis('visible')}><center>Book Ticket</center></div>)
        }
        </section>
        <section className="user-content">
            <div style={{"flex-grow":"1"}}>1st</div>
            <div style={{"flex-grow":"3","display":"flex","justify-content":"center"}} >
                <Ticket key="ticket" vis={tvis} uid={props.id}/>
                {/* <Viewticket vis={vticket}/> */}
                <div className="view-ticket" style={{"visibility":vticket}}>
                <div>Customer ID:{cid}</div>
                <div>Zoo ID:{zid}</div>
                <div>Guide ID:{gid}</div>
                <div>Entry Time:{time}</div>
            <button onClick={()=>{setVTicket('hidden')}}>Ok</button>
            </div>
        
            </div>
            <div style={{"flex-grow":"1"}}>3rd{tvis}</div>
        </section>
        </>
    )
}
export default Userportal;