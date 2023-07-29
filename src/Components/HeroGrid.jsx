import React from "react"
import "./stylesheet/HeroGrid.css"
import Footer from "./Footer"
import { Link } from 'react-router-dom'




export default function HeroGrid() {
  return(
    
 <>

<main className='hero-two'> 
<div className="hero-grid">
<div className='hero title'> 
<div className="sq"></div>
<div className='hero-name'> 
<span className="hero-meet">MEET</span><br/> RACHEL
<div className="hero-sub">CREATIVE DEVELOPER</div></div>
</div>

<Link to='/projects' className= 'hero projects'>
  <div className="hero-project">projects</div>
</Link>

<Link to='/contact' className= 'hero connect'>
  <div className='connect-pro'>connect</div> </Link>
<Footer />
</div>

</main>

</>

  )

}