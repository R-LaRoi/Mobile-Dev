import React from "react"
import "./stylesheet/Hero.css"
import mobileGif from './assets/redMobile.gif'

export default function Hero() {
  return(
    
 <>
<main className='hp-container'>  
<img className= "mobile-img" src={mobileGif} alt="no alternative text"  />

<div className='title-mobile'> 
<div className='name'>meet rachel</div>
<div className="sub-title">CREATIVE DEVELOPER</div>
<div className="rectangle"></div>
</div>

</main>



</>
    
  )

}