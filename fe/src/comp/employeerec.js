import './css/customerrec.css';
import './css/buttonrec.css';
import {useState} from 'react';
function Employeerec(){
    const [rec,setRec]=useState([]);
    function send(){
        fetch('http://localhost:2000/employeerec')
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
return(
    <>
    <div className="customerrec">
        <div className='buttonrec' onClick={send}>Display All Registered Employees</div>
        <div>
            <table>
                <thead>
                    <th>Employee Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Contact</th>
                    <th>Zoo ID</th>
                </thead>
                <tbody>
                    {rec.map(recs=>(
                        <tr>
                            <td>{recs.eid}</td>
                            <td>{recs.ename}</td>
                            <td>{recs.salary}</td>
                            <td>{recs.e_phone}</td>
                            <td>{recs.zid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
)
}
export default Employeerec;