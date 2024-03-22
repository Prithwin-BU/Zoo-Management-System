import React,{useState,useEffect} from 'react';
function Animal(props){
    const [animal,setAnimal]=useState('');
    const [gender,setGender]=useState('');
    const [time,setTime]=useState('');
    const [cnum,setCnum]=useState(0);
    const [type,setType]=useState('');
    const [gid,setGid]=useState([]);
    const [sid,setSid]=useState(0);
    useEffect(()=>{
        fetch('http://localhost:2000/animalguideid',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                zid:props.aid
            })
        })
          .then(response => {
            if(!response) console.error("cannot fetch data");
            return response.json();
          })
          .then(data=>{
            setGid(data);
            /* console.log(data); */
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
      });
    function send(e){
        e.preventDefault();
        fetch('http://localhost:2000/animal',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                animal:animal,
                gender:gender,
                time:time,
                cnum:cnum,
                type:type,
                gid:sid,
                zid:props.aid
            })
        })
    }
    return(
        <div class="login-container">
        <h2>Animal Details</h2>
        <form>
           
{/*             <div class="form-group">
                <label for="username">Animal ID:</label>
                <input type="text" id="aid" placeholder="Enter the animal id" required></input>
            </div> */}
            <div class="form-group">
                <label for="username">Animal:</label>
                <input type="text" id="animal" placeholder="Enter Animal Name" onChange={(e)=>setAnimal(e.target.value)} required></input>
            </div>

            <div class="form-group">
                <label for="username">Gender:</label>
                <input type="text" id="gender" placeholder="Enter gender(for male:M and female:F)" onChange={(e)=>setGender(e.target.value)} required></input>
            </div>
            <div class="form-group">
                <label for="username">Feed time:</label>
                <input type="time" id="feedtime" placeholder="" onChange={(e)=>setTime(e.target.value)} required></input>
            </div>
            <div class="form-group">
                <label for="username">Cage number:</label>
                <input type="text" id="cageno" placeholder="Enter cage number" onChange={(e)=>setCnum(e.target.value)} required></input>
            </div>
            
            <div class="form-group">
                <label for="username">Animal type:</label>
                <select name="animal"  onChange={(e)=>setType(e.target.value)}>
                    <option value="Mammals">Mammals</option>
                    <option value ="Birds">Birds</option>
                    <option value="Reptiles">Reptiles</option>
                    <option valye="Amphibians">Amphibians</option>
                    <option value="Fish">Fish</option>
                </select>
                
            </div>
            <div class="form-group">
                <label for="username">Animal Guide ID</label>
                <select onChange={(e)=>setSid(e.target.value)}>
                 {gid.map(item => (
          <option>{item.gid}</option> 
        ))}  
                </select>
            </div>
           
            <button type="submit" class="login-btn" onClick={send}>Submit</button>
        </form>
    </div>
    )
}
export default Animal;