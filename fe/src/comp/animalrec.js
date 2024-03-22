import './css/customerrec.css';
import './css/buttonrec.css';
import {useState} from 'react';
function Animalrec(){
    const [rec,setRec]=useState([]);
    function send(){
        fetch('http://localhost:2000/animalrec')
          .then(response => {
            if(!response) console.error("cannot fetch data");
            return response.json();
          })
          .then(data=>{
            setRec(data);
            console.log(data);
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
    }
return(
    <>
    <div className="customerrec">
        <div className='buttonrec' onClick={send}>Display All Registered Animals</div>
        <div>
            <table>
                <thead>
                    <th>Animal Id</th>
                    <th>Gender</th>
                    <th>Feed Time</th>
                    <th>Cage Number</th>
                    <th>Type</th>
                    <th>Guide ID</th>
                </thead>
                <tbody>
                    {rec.map(recs=>(
                        <tr>
                            <td>{recs.aid}</td>
                            <td>{recs.gender}</td>
                            <td>{recs.feed_time}</td>
                            <td>{recs.cage_number}</td>
                            <td>{recs.type}</td>
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
export default Animalrec;