import {Link,Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/layout.css';
function Layout(props){
    const nav=useNavigate();
    return(
        <>
        <div className='welcometab'>
           <div className='profile'>profile
           <div className='profile-details'>
           <div>{props.id}</div>
           <div>{props.name}</div>
           <div>{props.loc}</div>
           <div>{props.email}</div>
           <div>{props.phone}</div>
           <div onClick={()=>{nav('/')}}>Logout</div>
            </div>
            </div> 
            <center>
        <h1>Zoo Management System</h1>
        </center>
        <nav className='navigation'>
            <Link to="/admin"><div className='navi'>Home</div></Link>
           <Link to="/admin/customer"><div className='navi'>Customer Details</div></Link>
            <Link to="/admin/zoo"><div className='navi'>Zoo Details</div></Link>
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