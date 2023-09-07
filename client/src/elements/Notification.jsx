import React from "react";

export default function Notification ({notification}) { 
  
    const outerClass = "toast  p-2 mt-2 show   bg-gradient-" + notification.type ; 
    const Noti_title = {
        "danger" : "Whatch out !!" , 
        "success" : "Good News !! " , 
        "worning" :"pay attention !! ", 
    }
    
return (
<div className={outerClass} >
<div className="toast-header bg-transparent border-0">
<i className="material-icons text-white me-2">
notifications
</i>
<span className="me-auto text-white font-weight-bold"> {Noti_title[notification.type]} </span>
<small className="text-white"></small>
<i className="fas fa-times text-md text-white ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close" aria-hidden="true"></i>
</div>
<hr className="horizontal light m-0"/>
<div className="toast-body text-white">
{notification.message} 
</div>
</div>) ; 

}
