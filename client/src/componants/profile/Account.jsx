import { useStateContext } from "../../context/ContextProvidor";
import Avatar from "../Aside/avater";
import { Link, Navigate, Outlet } from "react-router-dom";
import UserAcState from "./UserAcState";

export default function Account () {
  
  const {user , token  ,notification } = useStateContext  () ; 

    return (
    <div className="container-fluid px-2 px-md-4">
      <div className="page-header min-height-300 border-radius-xl mt-4" style={{ backgroundImage: "url(https://yt3.googleusercontent.com/Bps04RAlUXojVvGdPwboX-1fxd8-OKtPQtqGKb9YQSXrX31LG8cW0JGKky8GPqgbpOBbWUQmrQ=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj)"}}>
        <span className="  bg-gradient-primary  opacity-6"></span>
      </div>
      <div className="card card-body mx-3 mx-md-4 mt-n6">
        <div className="row gx-4 mb-2">
          <div className="col-auto">
            <div className="avatar avatar-xl position-relative">
             <Avatar/>

            </div>

          </div>
          <div className="col-auto my-auto">
            <div className="h-100">
              <h5 className="mb-1">
              {user.FirstName + " " + user.LastName } 
              <UserAcState/>

              </h5>

              <p className="mb-0 font-weight-normal text-sm">
              {user.title } 
              </p>
             
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
            <div className="nav-wrapper position-relative end-0">

              <ul className="nav nav-pills nav-fill p-1" role="tablist">
                <li className="nav-item">
                  
                  <Link to ="/Account/View" className="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab"  >
                    <i className="material-icons text-lg position-relative">home</i>
                    <span className="ms-1">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  to="/Account/Payments"className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" >
                    <i className="material-icons text-lg position-relative">payment</i>
                    <span className="ms-1">Payment</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to ="/Account/Settings"  className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab"   >
                    <i className="material-icons text-lg position-relative">settings</i>
                    <span className="ms-1">Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        <Outlet /> 
        
            
          </div>
        </div>
     
    )
}