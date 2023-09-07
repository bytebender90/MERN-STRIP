import { Link } from "react-router-dom";
import Imageo from "./defulat.png" ; 
import { useStateContext } from "../../context/ContextProvidor";

export default function Avatar () {
  const {    user} = useStateContext () ; 

    return (
<img
  src={user.Image}  
  style={{width: 60, height: 60, borderRadius: 400/ 2}} 
/>

    )
}
