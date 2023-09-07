import { useState } from "react";
import { useStateContext} from "../../context/ContextProvidor";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";


export default function AccountSetting () {
    const {user , token  ,setToken , SetNotification } = useStateContext  () ; 
    const navigate = useNavigate();

const oldpassRef = useRef () ; 
const newpassRef = useRef () ; 
const renewpassRef = useRef () ; 
    const change_password = async(e) =>{ 
        e.preventDefault() ; 

        const payload = {
            method: 'PATCH', 
            body: JSON.stringify( {
              oldpass : oldpassRef.current.value,
              newpass : newpassRef.current.value  
            }) , 
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
        } ;  
        if (newpassRef.current.value == renewpassRef.current.value){ 

        
        const response = await  fetch (`https://35.232.11.65/users/password/${user._id}` ,payload ) ; 
        const result = await response.json();
           if (result.message== "password Has Been Updated ! " ) {
               setToken(result.token) ;
               SetNotification( "Your Information has been updated successfuly " ,  "success");
               navigate("/Account");

           }else {
               SetNotification( "something bad happen !! " ,  "danger");

           }
          }else {
            SetNotification( "New Password does'nt Match !! " ,  "danger");

          }
    }
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
                     
                    </div>
                  </div>
                </div>
                <form className="card-body p-3">
                  <p className="text-sm">
                  </p>
                  <hr className="horizontal gray-light my-4"/>
                  <ul className="list-group">
                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">old password:</strong> <input type="password" ref = {oldpassRef} required/> </li>
                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">new password :</strong> <input type="password" ref = {newpassRef} required/> </li>
                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark"> repeat new password :</strong> <input type="password" ref = {renewpassRef}  required/> </li>

                    <li className="list-group-item border-0 ps-0 pb-0">
                    <Link  to= "/Account" className="btn btn-danger m-2">
                        Cancel
                      </Link>
                      <a  onClick={change_password} className="btn btn-info m-2">
                        Save
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
      
    )
}