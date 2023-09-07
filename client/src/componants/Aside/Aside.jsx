import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import AsideItem from "./AsideItem";

export default function Aside () {
   
    return (
          
    
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs  fixed-start m-0 bg-gradient-dark" id="sidenav-main">

  <Link className="text-center p-3" to="./Dashborad" target="">
  <img src={Logo}  alt="logo" width={200} height={200} className="p-3"/>

 
  </Link>


<hr className="horizontal light mt-0 mb-2"/>

<div className="collapse navbar-collapse  w-auto h-auto " id="sidenav-collapse-main">
  <ul className="navbar-nav">
          
<AsideItem linkto="./"  icon ="dashboard" title="Dashboard" /> 
<AsideItem linkto="./Account"  icon ="manage_accounts" title="Account" />  
<AsideItem linkto="./DOD"  icon ="support_agent" title="Design On-Demand" /> 
<AsideItem linkto="./FunnelLibrary"  icon ="description" title="Funnel Library" /> 
<AsideItem linkto="./FunnelBonunses"  icon ="leaderboard" title="Trainings & Assets" /> 
<AsideItem linkto="./FunnelBonunses"  icon ="ok" title="some & Assets" /> 
<AsideItem linkto="./FunnelBonunses"  icon ="ok" title="some & Assets" /> 




        

      
    
  </ul>
</div>

</aside>
    )
}
