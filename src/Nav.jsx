import React from "react";
import { Link } from "react-router-dom";


export default function Nav(){

return(

   <ul>        
       
      <li><Link to="/">home</Link>
      </li><li><Link to="/goals">goals</Link></li>
     <li><Link to="/projects">projects</Link></li>
      </ul>
)


}