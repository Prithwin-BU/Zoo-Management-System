import { useState } from 'react';
function Animalguide(props){
    const [gname,setGname]=useState('');
    const [date,setDate]=useState('');
    const [gender,setGender]=useState('');
    const [salary,setSalary]=useState(0);
    const [phone,setPhone]=useState(0);
    function send(e){
        e.preventDefault();
        fetch("http://localhost:2000/animalguide",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                gname:gname,
                date:date,
                gender:gender,
                salary:salary,
                phone:phone,
                zid:props.aid
            })
        })
        .then(()=>{
        console.log("request sent")
    }).catch(err=>{
        console.error('error creating table',err);
    });
    }
    return(
        <>
        <div class="login-container">
        <h2>Animal Guide Details</h2>
        <form>
            <div class="form-group">
                <label for="username">Guide Name:</label>
                <input type="text" id="guidename" placeholder="Enter the guide name" onChange={(e)=>setGname(e.target.value)} required></input>
            </div>
            {/* <div class="form-group">
                <label for="username">Guide ID:</label>
                <input type="text" id="gid" placeholder="Enter the guide id" required></input>
            </div> */}
            <div class="form-group">
                <label for="username">Joined year:</label>
                <input type="date" id="jyear" placeholder="" onChange={(e)=>setDate(e.target.value)} required></input>
            </div>
            <div class="form-group">
                <label for="username">Gender:</label>
                <input type="text" id="gender" placeholder="Enter gender(for male:M and female:F)" onChange={(e)=>setGender(e.target.value)} required></input>
            </div>
            <div class="form-group">
                <label for="username">Salary:</label>
                <input type="text" id="salary" placeholder="Enter the Salary" onChange={(e)=>setSalary(e.target.value)}></input>
            </div>
            <div class="form-group">
                <label for="username">contact No.:</label>
                <input type="text" id="cont" placeholder="Enter contact number" onChange={(e)=>setPhone(e.target.value)}></input>
            </div>
            <button type="submit" class="login-btn" onClick={send}>Submit</button>
           
        </form>
        
    </div>
        </>
    )
}
export default Animalguide;