import { useNavigate } from "react-router-dom";
function Landing(){
    const nav=useNavigate();
    return(
        <>
        <h1>landing page</h1>
        <input type="button" value="Admin Login" onClick={()=>{nav('/adminlogin')}}></input>
        <input type="button" value="User Login"onClick={()=>{nav('/user')}}></input>
        </>
    )
}
export default Landing;