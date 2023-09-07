import { useState } from "react";
import { useStateContext} from "../../context/ContextProvidor";
import { Link } from "react-router-dom";


export default function AccountView () {
    const {user , token  ,notification } = useStateContext  () ; 
    if (! token ) {
        return <Navigate to = '/login' /> 
    }
    return (
       
                <div className="col-12 col-xl-4">
              <div className="card card-plain h-100">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-md-8 d-flex align-items-center">
                      <h6 className="mb-0">Profile Information</h6>
                    </div>
                    <div className="col-md-4 text-end">
                      <Link to="/Account/edite">
                        <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body p-3">
                  <p className="text-sm">
                  </p>
                  <hr className="horizontal gray-light my-4"/>
                  <ul className="list-group">
                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> {user.FirstName + " " + user.LastName }  </li>
                    <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> {user.phone }</li>
                    <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> {user.Email} </li>
                    <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Adress:</strong> {user.Address}</li>
                
                  </ul>
                </div>
              </div>
            </div>
      
    )
}