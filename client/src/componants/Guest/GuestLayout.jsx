import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvidor";
import "./style.css" ; 
import SideImage from "./SideImage";
import NavGuest from "./NavGuest.jsx";
import Notification from "../../elements/Notification";
import { Fade } from "react-awesome-reveal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export default function GuestLayout () {
const {token  , notifications  , STRIP_PUBLIC_KEY} = useStateContext () ; 

const stripePromise =  loadStripe(STRIP_PUBLIC_KEY);
    if (token ) {
        return <Navigate to="/" />
    }
    return (
      <div> 
           <NavGuest/> 
           <div className="row" > 
           
          <div className="col-lg-4 m-lg-5 "> 
       
           <SideImage/>
           </div>
           
           <div className="col-lg-5  m-lg-5"> 
           <Elements stripe={stripePromise}>
         
           </Elements> 

       </div>

            </div>
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