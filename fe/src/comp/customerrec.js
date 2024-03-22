import './css/customerrec.css';
import './css/buttonrec.css';
import React,{useState} from 'react';
function Customerrec(){
    const [rec,setRec]=useState([]);
    const [user,setFetch]=useState('');
    const [data,setData]=useState([]);
    const [del,setDel]=useState('');
    function send(){
        
        fetch('http://localhost:2000/customerrec')
          .then(response => {
            if(!response) console.error("cannot fetch data");
            return response.json();
          })
          .then(data=>{
            setRec(data);
            /* console.log(data); */
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
    }         
    function fetchrec(){
        fetch('http://localhost:2000/fetchcustomer',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:user})
        })
        .then(response=>{
            if(!response) {
                console.error("error in response object");
            }
            else{
                return response.json();
            }
        })
        .then(data=>{
            if(data.length===0) {
            alert("No record found for Customer name");
            setFetch('');
            }
            else{
            console.log(data);
            setData(data);
            }
        })
        .catch(err=>{
            console.error(err);
        }) 
      } 
/*       function Delete(val){
        console.log(val);
    rec.map(function(item){
        if(item.cid === val){
            setDel(item.cname);
            console.log(del);
            console.log(item);
      }});
      } */
return(
    <>
    <div className="customerrec">
       
        <div className='buttonrec' onClick={send}>Display All Registered Customers</div>
        <div>
            <table>
                <thead>
                    <th>Customer Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Guide ID</th>
                    <th>Delete Record</th>
                </thead>
                <tbody>
                    {rec.map(recs=>(
                        <tr>
                            <td>{recs.cid}</td>
                            <td>{recs.cname}</td>
                            <td>{recs.email}</td>
                            <td>{recs.phone}</td>
                            <td>{recs.address}</td>
                            <td>{recs.gid}</td>
                            <td><button value={recs.cid} /* onClick={(e)=>Delete(e.target.value)} */>Delete Entry</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
       <div>
            <h4>Search Customer Record by Customer Name</h4>
            <input type='text' placeholder='Enter name to fetch details' value ={user} onChange={(e)=>setFetch(e.target.value)}></input>
            <button value='Fetch' onClick={fetchrec}>Fetch</button>
            <table>
                <thead>
                    <th>Customer Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Guide ID</th>
                    <th>Delete Record</th>
                </thead>
                <tbody>
                    {data.map(recs=>(
                        <tr>
                            <td>{recs.cid}</td>
                            <td>{recs.cname}</td>
                            <td>{recs.email}</td>
                            <td>{recs.phone}</td>
                            <td>{recs.address}</td>
                            <td>{recs.gid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
)
}
export default Customerrec;