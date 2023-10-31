import React from 'react'
import { useParams ,useNavigate ,Link} from 'react-router-dom';
const Sidebar = () => {
    return (
    <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
        <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
            <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>ADMIN </h5></a></li>
            <li class="nav-item mb-2 "><Link to="/Dashboard"  class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></Link></li>
            <li class="nav-item mb-2">
                <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Products ▾</span></a>
                <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                   <li class="nav-item mb-2 "><Link to="/Admin"  class="nav-link text-secondary"><i class="fas fa-book-reader"></i> Product List</Link></li>
                   <li class="nav-item mb-2 "><Link to="/AddProduct" class="nav-link text-secondary"> <i class="fas fa-book-medical"></i> Add Product</Link></li>
                </ul>
            </li>
            <li class="nav-item mb-2"><Link to="/Orders" class="nav-link text-secondary"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Orders</span></Link></li>
            <li class="nav-item mb-2"><Link class="nav-link text-secondary"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></Link></li>
            
        </ul>
   </div>
    )
}
 
export default Sidebar