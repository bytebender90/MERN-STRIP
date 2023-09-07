import { useState } from "react";
import { useStateContext} from "../../context/ContextProvidor";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";


export default function AccountEdite () {
    const {user , token  ,SetUser , SetNotification } = useStateContext  () ; 
    const navigate = useNavigate();

    const fnameRef = useRef () ; 
const lnameRef = useRef () ; 
const phoneRef = useRef () ; 
const addressRef = useRef () ; 
    const user_Save = async(e) =>{ 
        e.preventDefault() ; 

        const payload = {
            method: 'PATCH', 
            body: JSON.stringify( [ 
            
         { "propName" :  "FirstName",  "value" :fnameRef.current.value} 
,   { "propName" :  "LastName",  "value" :lnameRef.current.value } 
,
{ "propName" :  "phone",  "value" :phoneRef.current.value } 
,
{ "propName" :  "Address",  "value" :addressRef.current.value }  ]) , 
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
        } ;  

        const response = await  fetch (`https://35.232.11.65/users/${user._id}` ,payload ) ; 
        const result = await response.json();
           if (result.result.acknowledged == true ) {
               SetUser(result.user) ;
               SetNotification( "Your Information has been updated successfuly " ,  "success");
               navigate("/Account");

           }else {
               SetNotification( "something bad happen !! " ,  "danger");

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
                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">First Name:</strong> <input type="text" ref = {fnameRef} defaultValue={user.FirstName} required/> </li>
                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Last Name:</strong> <input type="text" ref = {lnameRef} defaultValue={user.LastName} required/> </li>

                    <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> <input type="text" ref = {phoneRef} defaultValue={user.phone} required/> </li>
                    <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Adress:</strong> <input type="text" ref = {addressRef } defaultValue={user.Address} required/> </li>
                    <li className="list-group-item border-0 ps-0 pb-0">
                    <Link  to= "/Account" className="btn btn-danger m-2">
                        Cancel
                      </Link>
                      <a  onClick={user_Save} className="btn btn-info m-2">
                        Save
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
      
    )
}