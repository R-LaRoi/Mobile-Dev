import React from "react";
import { Link } from "react-router-dom";



export default function Nav(){

return(

   <ul className="nav-corner">        

       <li>
          <Link to="/projects" className="nav sq-3">projects</Link>
         </li>
       <li>
          <li>
         <Link to="/goals" className="nav sq-2">goals</Link>
         </li>
         <Link to="/contact" className="nav sq-4">contact</Link>
         </li>
      </ul>
)


}