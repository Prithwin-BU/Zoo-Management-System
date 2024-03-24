import {Link,Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/layout.css';
function Layout(props){
    const nav=useNavigate();
    return(
        <>
        <div className='welcometab'>
           <div className='profile'>Profile
           <div className='profile-container'>
           <div className="profile-details">Admin ID:{props.id}</div>
           <div className="profile-details">Admin Name:{props.name}</div>
           <div className="profile-details">Location:{props.loc}</div>
           <div className="profile-details">Email:{props.email}</div>
           <div className="profile-details">Contact:{props.phone}</div>
           <div className="profile-details" onClick={()=>{nav('/')}} style={{border:"solid 1px",padding:"3px"}}>Logout</div>
            </div>
            </div> 
            <center>
        <h1>Zoo Management System</h1>
        </center>
        <nav className='navigation'>
            <Link to="/admin"><div className='navi'>Home</div></Link>
           <Link to="/admin/customer"><div className='navi'>Customer Details</div></Link>
            {/* <Link to="/admin/zoo"><div className='navi'>Zoo Details</div></Link> */}
             <Link to="/admin/animalguide"><div className='navi'>Animal Guide</div></Link>
            <Link to="/admin/animal"><div className='navi'>Animal</div></Link>
            <Link to="/admin/employee"><div className='navi'>Employee Details</div></Link>
           <Link to="/admin/query"><div className='navi'>Queries</div></Link>
        </nav>
        </div>
        <Outlet/>
        
        </>
    )
};
export default Layout;