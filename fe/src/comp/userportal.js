import "./css/user.css"
import { useNavigate } from "react-router-dom";
function Userportal(props){
    const nav=useNavigate();
    return(
        <>
        <div>
            <center><h1>Welcome....{props.name}</h1></center>
        <div className="profile">profile
        <div className="profile-details">Name:{props.name}</div>
        <div className="profile-details">Email:{props.email}</div>
        <div className="profile-details">Phone:{props.phone}</div>
        <div className="profile-details">Address:{props.add}</div>
        <div className="profile-details">Customer ID:{props.id}</div>
        <div  className="profile-details" onClick={()=>{nav('/')}}>Logout</div>
        </div>
        </div>
        </>
    )
}
export default Userportal;