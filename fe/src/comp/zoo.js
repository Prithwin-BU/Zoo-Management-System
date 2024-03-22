import {useState} from 'react';
function Zoo(){
/*     const [id,setId]=useState('');*/
    const [name,setName]=useState('');
    const [contact,setContact]=useState('');
    const [location,setLocation]=useState(''); 
    function send(){
        fetch("http://localhost:2000/zoo",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                zname:name,
                contact:contact,
                location:location
            })
        })
        .then(()=>{
        console.log("request sent from zoo")
    }).catch(err=>{
        console.error('error creating table',err);
    });
    }
        return(
        <>
    <div class="login-container">
        <h2>Zoo Details</h2>
        <form>
            <div class="form-group">
                <label for="username">Zoo Name:</label>
                <input type="text" id="zooname" placeholder="Enter the zoo name" onChange={(e)=>setName(e.target.value)} required></input>
            </div>
{/*             <div class="form-group">
                <label for="username">Zoo ID:</label>
                <input type="text" id="zid" placeholder="Enter the zooid" required></input>
            </div> */}
            <div class="form-group">
                <label for="username">Zoo contact No.:</label>
                <input type="text" id="zoocont" placeholder="Enter the contact number" onChange={(e)=>setContact(e.target.value)} required></input>
            </div>
            <div class="form-group">
                <label for="username">Zoo location:</label>
                <input type="text" id="zoolocation" placeholder="Enter the zoo location" onChange={(e)=>setLocation(e.target.value)} required></input>
            </div>
           
            <button type="submit" class="login-btn" onClick={send}>Submit</button>
        </form>
    </div>
        </>
    )
};
export default Zoo;