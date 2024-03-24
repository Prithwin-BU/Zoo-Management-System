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
        <div className="userportal-nav">
        
            <center><h1>Welcome....{props.name}</h1></center>
        <div className="profile" >Profile
        <div className="profile-container">
        <div className="profile-details">Name:{props.name}</div>
        <div className="profile-details">Email:{props.email}</div>
        <div className="profile-details">Phone:{props.phone}</div>
        <div className="profile-details">Address:{props.add}</div>
        <div className="profile-details">Customer ID:{props.id}</div>
        <div  className="profile-details" onClick={()=>{nav('/')}} style={{border:"solid 1px"}}><center>Logout</center></div>
        </div>
        </div>
        
        </div>
        <section className="book-ticket">
            {ticket > 0?
            (<div onClick={()=>setVTicket('visible')} className="userportal-ticket"><center>View Ticket</center></div>):
            (<div onClick={()=>setTvis('visible')} className="userportal-ticket"><center>Book Ticket</center></div>)
        }
        </section>
        <section className="user-content">
            <div style={{"flex-grow":"0"}} className="first-container"><div className="first">
                </div>
                <div className="second"></div>
                <div className="third"></div>
                </div>
            <div style={{"flex-grow":"1","display":"flex","justify-content":"center"}} >
                <Ticket key="ticket" vis={tvis} uid={props.id}/>
                {/* <Viewticket vis={vticket}/> */}
                <div className="view-ticket" style={{"visibility":vticket}}>
                <div>Customer ID:{cid}</div>
                <div>Zoo ID:{zid}</div>
                <div>Guide ID:{gid}</div>
                <div>Entry Time:{time}</div>
                <div>Number of Tickets:{ticket}</div>
            <button onClick={()=>{setVTicket('hidden')}}>Ok</button>
            </div>
            <div className="middle-container">
                <h3>Rules & Regulations to be followed as per Zoo Authority:</h3>
                <ol>
                    <li><b><u>Do not feed animals or birds.</u></b> Animals can become ill after they eat unsuitable food.
                         Remember that each animal has its own ration, fed to it by the zoo workers. 
                         Do not feed the animals even if the animals seem hungry.</li>
                    <li><b><u>Let the animals stay calm.</u></b> Do not make loud noises, clap your hands or attempt to scare 
                        them to get a reaction. Many animals are afraid of noise, timid and shy even though they are captive. </li>
                    <li><b><u>Be careful, obey all signage and directions from staff.</u></b> Zoos can be risky if you don't follow the rules.
                         Do not climb over fences. Don't try to hug animals unless a keeper says it's okay and don't try to take photos
                          of yourself or your children with the animals from anywhere other than behind the barriers and fences.</li>
                    <li><b><u>Do not ask the zoo employees unnecessary, silly or inappropriate questions.</u></b> They are busy with their work; they are not guides.
 Information about animals is usually provide by their enclosure. Read about the zoo and any animals you're especially interested 
 in before visiting the zoo. If a zookeeper or other expert is giving a talk or demonstration at any of the enclosures, listen quietly
  and ask questions when invited to do so.</li>
                    <li><b><u>Use a map or guidebook to plan your route around the zoo.</u></b> If there are exhibits you don't want to miss, visit them first.
                         Plan your route around the zoo so you don't have to rush around and so you don't find yourself heading in the opposite direction 
                         as everyone else at a peak time.</li>
                </ol>
            </div>
        
            </div>
            <div style={{"flex-grow":"0"}} className="first-container"><div className="fourth">
                </div>
                <div className="fifth"></div>
                <div className="sixth"></div>
                </div>
        </section>
        </>
    )
}
export default Userportal;