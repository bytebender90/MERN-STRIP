import React from "react";
import { useContext, useRef } from "react";

import { useStateContext } from "../../../context/ContextProvidor";

const Login =  () => { 

const mailRef = useRef () ; 
const PassRef = useRef () ; 
 
const {SetUser , setToken , SetNotification} = useStateContext ()  ; 
    const onsubmit = async (ev) => {
        ev.preventDefault() ; 
        const payload = {
            method: 'POST', 
            body: JSON.stringify( { 
            email : mailRef.current.value , 
            password :PassRef.current.value , 
            }) , 
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
        } ; 

         const response = await  fetch ('/users/login' ,payload ) ; 
         const result = await response.json();
            if (result.message == "Auth Successful") {
              SetNotification( `welcome back ${result.user.FirstName} to Funnel hacker lab` ,  "success");
              console.log(result.user);
                SetUser(result.user) ;
                setToken(result.token) ; 

            }else {
              SetNotification( `Wrong email or password ` ,  "danger");

            }


      
    
} 






  /////////////////////
return (
    <form onSubmit={onsubmit} className="">
<h5 className="p-2"> Login to your account </h5>
  <div className="container  border pt-5 ">
    <label htmlFor="uname" className="h6 text-dark">  Email </label> <br/>
    <input type="text" ref ={mailRef} placeholder="Enter your email" name="uname" required/>
    <br/>
<br/>
    <label htmlFor="uname" className="h6 text-dark">Password </label> <br/>

    <input type="password" ref ={PassRef} placeholder="Enter Password" name="password" required/>

    <button type="submit">Login</button>
    <span className="psw">Forgot <a href="#">password?</a></span>


 

  </div>
</form>
)
};



export default Login;

