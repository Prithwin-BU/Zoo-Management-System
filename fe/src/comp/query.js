import {Link,Outlet} from 'react-router-dom';
import './css/query.css';
function Query(){
    return(
        <div className="queries">
            <Link to="/admin/customerrec"><div className="query">Customer Records</div></Link>
            <Link to="/admin/zoorec"><div className="query">Zoo Records</div></Link>
            <Link to="/admin/animalguiderec"><div className="query">Animal Guide Records</div></Link>
            <Link to="/admin/animalrec"><div className="query">Animal Records</div></Link>
            <Link to="/admin/employeerec"><div className="query">Employee Records</div></Link>
        </div>
    )
}
export default Query;