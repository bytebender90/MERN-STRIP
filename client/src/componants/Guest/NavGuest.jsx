import { Link } from "react-router-dom";
import Avatar from "../Aside/avater";
import SideImage from "./SideImage";

const LOGO = "https://images.eliejah.com/HFLogo.png" ; 
 

export default function NavGuest () {
   
    return (
       
<nav className="navbar navbar-main navbar-expand-lg px-0 mx-4  border-radius-xl" id="navbarBlur" data-scroll="true">
     <div className="container-fluid py-1 px-3">
       <nav aria-label="breadcrumb">
        
         <div className="font-weight-bolder mb-0  align-items-center">    <span className="h5 ">  Funnel Hacker Lab </span></div>
      
       </nav>
       <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
         <div className="ms-md-auto pe-md-3 d-flex align-items-center">
           <div className="input-group input-group-outline">
            {/*<input type="text" className="form-control"/>}*/ } 
           </div>
         </div>
         <ul className="navbar-nav  justify-content-end">
          
           <li className="nav-item d-flex align-items-center m-2">
             <Link  className=" font-weight-bold  btn btn-danger" to="./signup">
               <i className="fa fa-sign-in  me-sm-1"></i>
               <span className="d-sm-inline p-2 ">Sign Up Now</span>
             </Link>
           </li>
           <li className="nav-item d-flex align-items-center m-2  ">
             <Link  className=" font-weight-bold  btn btn-info " to="login">
               <i className="fa fa-user me-sm-1"></i>
               <span className="d-sm-inline p-2">Log in Please</span>
             </Link>
           </li>
           <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
             <a className="nav-link text-body p-0" id="iconNavbarSidenav">
               <div className="sidenav-toggler-inner">
                 <i className="sidenav-toggler-line"></i>
                 <i className="sidenav-toggler-line"></i>
                 <i className="sidenav-toggler-line"></i>
               </div>
             </a>
           </li>
         
        
         </ul>
       </div>
     </div>
   </nav>
    )
}
