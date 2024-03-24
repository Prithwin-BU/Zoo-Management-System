import { useState } from "react";
import { useNavigate } from "react-router-dom";
function User(props){
    const [login,setLogin]=useState(true);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState(0);
    const [add,setAdd]=useState('');
    const [pass,setPass]=useState('');
    var nav=useNavigate();
    function register(){
        fetch("http://localhost:2000/customer",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                name:name,
                email:email,
                address:add,
                phone:phone,
                password:pass
            })
        })
        .then(()=>{
        console.log("request sent")
    }).catch(err=>{
        console.error('error creating table',err);
    });
    fetch('http://localhost:2000/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username:name,
            password:pass
        })
    })
    /* .then(()=>{console.log('request sent')}) */
    .then((response)=>{
        if(!response) console.log("no response");
        else{
            return response.json();
        }
    })
    .then((data)=>{

            console.log(data[0].cid);
            /* setName(data[0].cname); */
            nav('/userportal');
            props.parentfunction(name,email,phone,add,data[0].cid);
/*         }
        else{
            alert("Username and Password doesn't match");
        } */
    })
    .catch((err)=>{
        console.error("error detected in fetching the login api",err);
    })
    nav('/userportal')
    props.parentfunction(name,email,phone,add);
    }
    function loginuser(){
        fetch('http://localhost:2000/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:name,
                password:pass
            })
        })
        /* .then(()=>{console.log('request sent')}) */
        .then((response)=>{
            if(!response) console.log("no response");
            else{
                return response.json();
            }
        })
        .then((data)=>{
           /*  console.log(data.length()); */
/*            console.log(data);
           console.log(data.length);
           console.log(data[0].count); */
           /* console.log(data.count); */
            if(data[0].count===1){
                /* console.log(data.count); */
                console.log(data[0].phone);
                setName(data[0].cname);
                nav('/userportal');
                props.parentfunction(name,data[0].email,data[0].phone,data[0].address,data[0].cid);
            }
            else{
                alert("Username and Password doesn't match");
            }
        })
        .catch((err)=>{
            console.error("error detected in fetching the login api",err);
        })
    }
   
    return(
        <>
        <div className="admin-outer">
            {login===true?
            (<><div className="adminlogin-container">
                <input type="text" placeholder="Enter UserName" onChange={(e)=>{setName(e.target.value)}}></input>
                <input type="text" placeholder="Enter Email ID" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <input type="text" placeholder="Enter Phone Number" onChange={(e)=>{setPhone(e.target.value)}}></input>
                <input type="text" placeholder="Enter Your Address" onChange={(e)=>{setAdd(e.target.value)}}></input>
                <input type="text" placeholder="Enter your password" onChange={(e)=>{setPass(e.target.value)}}></input>
                <input type="button" onClick={register} value="Register"></input>
                
                <div onClick={()=>{setLogin(false)}}><u>Already have an account?Login</u></div>
                </div>
                </>)
            :
            (   
                <><div className="adminlogin-container">
                <input type="text" placeholder="Enter UserName" onChange={(e)=>setName(e.target.value)}></input>
                <input type="text" placeholder="Enter your password" onChange={(e)=>setPass(e.target.value)}></input>
                <button onClick={loginuser}>Login</button>
                <div onClick={()=>{setLogin(true)}}><u>New User?Create Your Account</u></div>
                </div>
                </>)}
        </div>
        </>
    )
}
export default User;