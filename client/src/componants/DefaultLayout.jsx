import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvidor";
import Aside from "./Aside/Aside";
import Nav from "./Nav";
import Notification from "../elements/Notification";
import { Fade } from "react-awesome-reveal";

export default function DefaultLayout () {
    const {user , token  ,notifications , STRIP_PUBLIC_KEY } = useStateContext  () ; 
    if (! token ) {
        return <Navigate to = '/login' /> 
    }
    return (
        <div id="defaultLayout" >
                <Aside /> 
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Nav/>
               <Outlet /> 
               

               </main>
               <div className="row"    style ={  {
        left  : "1502px" ,
        top : "0" ,
        position : 'absolute'
    }}> 
            {
                notifications.map (
                    notifi=> 
                    
                  <div className="col-lg-12"  key={notifi.id}><Fade triggerOnce>  <Notification notification = {notifi} />    </Fade>  </div>
                 
                )
            }
            
           

            </div>
        </div>
    )
}