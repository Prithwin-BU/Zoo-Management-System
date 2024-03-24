import { useNavigate } from "react-router-dom";
import './css/landing.css'
function Landing(){
    const nav=useNavigate();
    return(
        <>
        <div className="landing-container">
        <div className="Admin-Login" onClick={()=>{nav('/adminlogin')}}>Admin</div>
        <div  className="User-Login" onClick={()=>{nav('/user')}}>User</div>
        </div>
        </>
    )
}
export default Landing;