import React, { useRef } from "react";
import { useStateContext } from "../context/ContextProvidor";
import { Elements, CardElement, useStripe } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";

const DodForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { user, token, SetNotification } = useStateContext();

  const exampleUrlRef = useRef(null);
  const specificsRef = useRef(null);
  const nicheRef = useRef(null);
  const replicateRef = useRef(null);
  const fbProfileRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
  
      if (error) {
        SetNotification(error.message, "danger");

      } else { 
    // Access the input values using the ref objects

const payload = {
            method: 'POST', 
            body: JSON.stringify( { 
                token : token , 
                exampleUrlValue : exampleUrlRef.current.value,
                specificsValue: specificsRef.current.value,
                nicheValue : nicheRef.current.value,
                replicateValue : replicateRef.current.value,
                fbProfileValue : fbProfileRef.current.value,
                payment_Method : paymentMethod
            }) , 
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          } ; 
          const response = await fetch('http://localhost:8080/users/signup', payload);
          const result = await response.json();
          if (result.message === "UserCreated") {
            SetUser(result.user) ;
            setToken(result.token) ; 
            SetNotification("Hello and welcome to Funnel hacker lab ", "success");
          } else {
            SetNotification("something bad happen !! " + result, "danger");
          }
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
    <form
      className="mt-2 w-80 text-dark border border-gray p-3"
      onSubmit={handleSubmit}
    >
      <h5>Example of URL link that we should model off of</h5>
      <div className="input-group input-group-outline mb-3">
        <input
          type="text"
          className="form-control"
          ref={exampleUrlRef}
          name="exampleurl"
          required
        />
      </div>

      <h5>Describe any specifics that you would like to see in your Funnel Page Template</h5>
      <div className="input-group input-group-outline mb-3">
        <input
          type="text"
          className="form-control"
          ref={specificsRef}
          name="specifics"
          required
        />
      </div>

      <h5>What niche would this template be in?</h5>
      <div className="input-group input-group-outline mb-3">
        <input 
        type="text"
         className="form-control" 
         name="niche" 
         ref = {nicheRef}
         required />
      </div>

      <hr className="horizontal dark mt-2 mb-4" />
        <h5>Would you like us to directly replicate this funnel example or add our own spin off?</h5>
        <div className="form-check">
          <input
           type="radio" 
           name="replicate"
            id="samefunnel"
             className="form-check-input"
              value="I need the same funnel" 
              ref={replicateRef} />
          <label htmlFor="samefunnel" className="form-check-label">I need the same funnel</label>
        </div>
        <div className="form-check">
          <input 
            type="radio"
            name="replicate"
            id="changeit" 
            className="form-check-input" 
            value="Please change it up" 
            ref={replicateRef} />
          <label htmlFor="changeit" className="form-check-label">Please change it up</label>
        </div>

        <div className="form-check">
          <input
           type="radio" 
           name="replicate" 
           id="other" 
           className="form-check-input" 
           value="I need you to find an example for me and I will click the &quot;keep me updated&quot; button below to later approve the funnel you found" 
           ref={replicateRef} />
          <label htmlFor="other" className="form-check-label">I need you to find an example for me and I will click the "keep me updated" button below to later approve the funnel you found</label>
        </div>

      <hr className="horizontal dark mt-2 mb-4" />

      <h5>What is your Facebook Profile URL so that we can tag you in our group with the funnel preview upon completion?</h5>

      <div className="input-group input-group-outline mb-3">
        <input 
        type="text" 
        className="form-control" 
        name="fbprofile"
        ref= {fbProfileRef} />
      </div>
      <h5>Payments</h5>

      <div style={{backgroundColor:"white" ,  border: '1px solid #ccc' }} className="form-control p-3 navbar-brand"> 
       
       <CardElement options={CARD_ELEMENT_OPTIONS}/>

     </div>

      <div className="input-group input-group-outline mb-3">
        <div className="text-center">
          <button type="submit" className="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0">
            <i className="material-icons text-sm">add</i> Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default DodForm;