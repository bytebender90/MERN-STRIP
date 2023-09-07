import { useContext, useRef } from "react";

import { useStateContext } from "../../../context/ContextProvidor";
import {  CardElement, useStripe}  from '@stripe/react-stripe-js';
import {  useElements } from '@stripe/react-stripe-js';
import axiosClient from "../../../axios-client";


export default function Signup  () {

const stripe = useStripe();
const elements = useElements();
const fnameRef = useRef () ; 
const lnameRef = useRef () ; 
const mailRef = useRef () ; 
const PassRef = useRef () ; 
const PassConfirmRef = useRef () ; 


  const {SetUser , setToken , SetNotification} = useStateContext ()  ; 

  const onsubmit = async (ev) => {
    ev.preventDefault() ; 
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
  
      if (error) {
        SetNotification(error.message, "danger");

      } else {
console.log (paymentMethod);
        const payload = { 
        fname :fnameRef.current.value , 
              lname: lnameRef.current.value , 
              email : mailRef.current.value , 
              password :PassRef.current.value , 
              password_confirmation: PassConfirmRef.current.value ,
              payment_Method : paymentMethod
        
          } ; 
      
          if (PassRef.current.value === PassConfirmRef.current.value) {
            const response = await axiosClient.post('/users/signup', payload);
            const result = await response.json();
            if (result.message === "UserCreated") {
              SetUser(result.user) ;
              setToken(result.token) ; 
              SetNotification("Hello and welcome to Funnel hacker lab ", "success");
            } else {
              SetNotification("something bad happen !! ", "danger");
            }
          } else 
            SetNotification("Passwords don't match ", "danger");
          
      }
    
    };
    
  
///////// Card Element Styling /////// 
const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: '16px',
        color: '#32325d',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        '::placeholder': {
          color: '#aab7c4',
        },
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px 12px',
        ':focus': {
          border: '1px solid orange', // Set border color to orange on focus
        },
      },
      invalid: {
        color: '#fa755a',
        border: '1px solid #fa755a',
      },
    },
  };
  //////////////////////////////////////
  return (
    <form onSubmit={onsubmit}>
      <h5 className="m-3 pl-6">Create new account for free</h5>
      <div className="container border">
        <label className="h6">Your name</label><br/>
        <input type="text" ref={fnameRef} placeholder="First Name" name="fname" className="w-45 m-2"/> 
        <input type="text" ref={lnameRef} placeholder="Last Name" name="lname" className="w-45" /><br/>
        <label className="h6"><b>Email</b></label><br/>
        <input type="email" ref={mailRef} placeholder="example@gamil.com" name="email"/><br/>
        <label className="h6"><b>Password</b></label><br/>

        <input type="password" ref={PassRef} placeholder="Enter Password" name="password" id="password"/>
        <input type="password" ref={PassConfirmRef} placeholder="Confirm Password" name="confirm_password" id="confirm_password"/>
        <label className="h6"><b>Payments </b></label><br/>

       <div style={{backgroundColor:"white" ,  border: '1px solid #ccc' }} className="form-control p-3 navbar-brand"> 
       
          <CardElement options={CARD_ELEMENT_OPTIONS}/>

        </div>
<br/>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}