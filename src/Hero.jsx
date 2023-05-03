import React from "react"
import "./Hero.css"
import "./images/1.png"
import { Link } from "react-router-dom";

export default function Hero() {
  return(
    
<div className="container">

    <section className='header'>
      <img src="https://user-images.githubusercontent.com/114012059/235471454-32551c3b-28d2-4d15-9050-df955463082c.png" alt="hand-illustration"/>
      <div className='hero-text meet'>meet</div>
      <div className="hero-text name">rachel
      <div className="title">frontend developer</div>

<div>
  <ul>
    <li><Link to="/">home</Link>
      </li><li><Link to="/goals">goals</Link></li>
     <li><Link to="/projects">projects</Link></li>
      <li><Link to="/contact">contact</Link></li>
      </ul>
        
  </div>
     </div>
 




    </section>
    </div>
    
  )

}