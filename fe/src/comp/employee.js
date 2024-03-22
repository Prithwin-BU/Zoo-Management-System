import './css/employee.css';
import {useState,useEffect} from 'react';
function Employee(props){
    const [name,setName]=useState('');
    const [salary,setSalary]=useState(0);
    const [phone,setPhone]=useState(0);
    const [zid,setZid]=useState();
    const [sid,setSid]=useState([]);
   /*  useEffect(()=>{
        fetch('http://localhost:2000/zid')
        .then(response=>{
            if(!response)
            console.error("cannot fetch zid from zoo table");
        else{
            return response.json();
        }
        })
        .then(data=>{
            setSid(data);
        })
        .catch(err=>{
            console.error("request failed",err);
        })
    }) */
    function send(e){
        e.preventDefault();
        fetch('http://localhost:2000/employee',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                salary:salary,
                phone:phone,
                zid:props.aid
            })
        })
    }
    return(
        <>
 <div class="login-container">
        <h2>Employee Details</h2>
        <form>
            <div class="form-group">
                <label for="username">Employee Name:</label>
                <input type="text" id="empname" placeholder="Enter the employee name" onChange={(e)=>setName(e.target.value)} required></input>
            </div>
{/*             <div class="form-group">
                <label for="username">Employee ID:</label>
                <input type="text" id="eid" placeholder="Enter the employee id" required></input>
            </div> */}
            <div class="form-group">
                <label for="username">Salary:</label>
                <input type="text" id="salary" placeholder="Enter the Salary" onChange={(e)=>setSalary(e.target.value)}></input>
            </div>  
            <div class="form-group">
                <label for="username">Employee phone No.:</label>
                <input type="text" id="empphone" placeholder="Enter the phone number" onChange={(e)=>setPhone(e.target.value)}required></input>
            </div>
            {/* <div class="form-group">
            <label for="username">Enter Zoo ID</label>
            <select onChange={(e)=>setZid(e.target.value)}>
                 {sid.map(item => (
          <option>{item.zid}</option> // Assuming 'name' is one of the fields
        ))}  
                </select>
            </div> */}
            <button type="submit" class="login-btn" onClick={send}>Submit</button>
        </form>
    </div>
        </>
    )
}
export default Employee;