import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"; 
import { useStateContext } from "../context/ContextProvidor";
import DodForm from "../elements/DodForm";

export default function DOD () {
  const {token  , notifications  , STRIP_PUBLIC_KEY} = useStateContext () ; 
  const stripePromise =  loadStripe(STRIP_PUBLIC_KEY);

    return (
        <> 
        <h3 className="mt-2 text-center">Design On-Demand  </h3>
        <hr className="horizontal dark mt-2 mb-4"/>
        <div className="m-3 ">
        <Elements stripe={stripePromise} >
          <DodForm/>
        </Elements>
        </div>
       
        </>
    )
}