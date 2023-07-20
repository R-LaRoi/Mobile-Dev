import React from "react";
import { Link } from "react-router-dom";
import './stylesheet/nav.css'



export default function Nav(){

return(

   <ul className="nav-bar">        
  <li>
         <Link to="/main" className="nav"><i className="fa-solid fa-location-arrow"></i></Link>
         </li>
       <li>
          <Link to="/projects" className="nav">projects</Link>
         </li>
       <li>
        
         <Link to="/contact" className="nav">contact</Link>
         </li>
      </ul>
)


}