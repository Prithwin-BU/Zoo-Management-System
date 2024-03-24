import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './css/adminlogin.css';
function Adminlogin(props){
    const [login,setLogin]=useState(true);
    const [name,setName]=useState('');
    const [loc,setLoc]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState(0);
    const [pass,setPass]=useState('');
    const nav=useNavigate();
    function Login(){
        fetch('http://localhost:2000/adminlogin',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                pass:pass
            })
        })
        .then(response=>{
            if(!response.ok){
                console.error("error fetching data")
            }
            else{
                return response.json();
            }
        })
        .then(data=>{
            console.log(data);
            if(data.length!==0)
            {
            console.log(data[0].aid);
            props.adminfunction(data[0].aid,data[0].aname,data[0].alocation,data[0].aemail,data[0].aphone);
            nav('/admin')
            }
        else
        alert("Name and Password doesnt match");
        })
    }
    function Register(){
        fetch("http://localhost:2000/adminregister",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                loc:loc,
                email:email,
                phone:phone,
                pass:pass
            })
        })
        fetch('http://localhost:2000/adminlogin',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                pass:pass
            })
        })
        .then(response=>{
            if(!response.ok) console.error("failed to fetch data")
            else{
        return response.json();
        }
        })
        .then(data=>{
            props.adminfunction(data[0].aid,name,loc,email,phone);
            nav('/admin');
        })
        
    }
    return(
        <>
        <div className="admin-outer">
        {login===false?
        (<div className="adminlogin-container">
        <h1>Register as New Admin</h1>
        <input type="text" placeholder="Enter Admin Name" onChange={(e)=>setName(e.target.value)}></input>
        <input type="text" placeholder="Enter Location"onChange={(e)=>setLoc(e.target.value)}></input>
        <input type="text" placeholder="Enter Email"onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="number" placeholder="Enter Contact no." onChange={(e)=>setPhone(e.target.value)}></input>
        <input type="text" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}></input>
        <button onClick={Register}>Register</button>
        <p onClick={()=>{setLogin(true)}}><u>ALready registered as Admin?Login</u></p>
        {/* <button onClick={()=>{nav('/admin')}}>navigate to admin page</button> */}
        </div>):
        (<div className="adminlogin-container">
            <h1>Login as Admin</h1>
            <input type="text" placeholder="Enter Admin Name" onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}></input>
            <button onClick={Login}>Login</button>
            <p onClick={()=>{setLogin(false)}}><u>Register as New Admin?Click Here</u></p>
        </div>)
        }
        </div>
        </>
    )
}
export default Adminlogin;
