import { Link } from "react-router-dom";

export default function AsideItem ({linkto, icon , title}) {
   
    return (
      
<li className="nav-item">
<Link className="nav-link text-white " to={linkto}>
  
    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
      <i className="material-icons opacity-10">{icon}</i>
    </div>
  
  <span className="nav-link-text ms-1">{title}</span>
</Link>
</li>  

    )
}
