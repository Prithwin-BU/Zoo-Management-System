import './css/customerrec.css';
import './css/buttonrec.css';
import {useState} from 'react';
function Animalguiderec(){
    const [rec,setRec]=useState([]);
    function send(){
        fetch('http://localhost:2000/animalguiderec')
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
        <div className='buttonrec' onClick={send}>Display All Registered Animal Guides</div>
        <div>
            <table>
                <thead>
                    <th>Guide Id</th>
                    <th>Guide Name</th>
                    <th>Joined Date</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    <th>Contact</th>
                </thead>
                <tbody>
                    {rec.map(recs=>(
                        <tr>
                            <td>{recs.gid}</td>
                            <td>{recs.gname}</td>
                            <td>{recs.joined_date}</td>
                            <td>{recs.gender}</td>
                            <td>{recs.salary}</td>
                            <td>{recs.g_phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
)
}
export default Animalguiderec;