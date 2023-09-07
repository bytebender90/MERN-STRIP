import { useState } from "react";
import { useStateContext} from "../../context/ContextProvidor";
import { Navigate } from "react-router-dom";


export default function Payments () {
    const {user , token   } = useStateContext  () ; 
   
    return ( 
              <>
                <div className="col-12 col-xl-4">
              <div className="card card-plain h-100">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-md-8 d-flex align-items-center">
                      <h6 className="mb-0">Profile Information</h6>
                    </div>
                   
                  </div>
                </div>
                <div className="card-body p-3">
                  <p className="text-sm">
                  </p>
                  <hr className="horizontal gray-light my-4"/>
                  <ul className="list-group">
                    
                  </ul>
                </div>
              </div>
            </div>
              </>
    );
  
}