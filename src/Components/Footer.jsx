import React from 'react'
import'./stylesheet/HeroGrid.css'
export default function Footer () {


return(


<footer className="hero-footer">
  <ul className="hero-ul">
      <li>© Copyright 2023 Rachel Stroy | All Rights Reserved</li>

        <li>
          <a href="https://github.com/R-LaRoi/" target= "_blank" alt="no alternative text">
          <i className="fa-brands fa-github footer-icon">
            </i>
            </a>
             </li>

        <li>
          <i class="fa-solid fa-square-envelope footer-icon"></i>
          </li>
        <li>
          <a href="https://www.linkedin.com/in/rachel-stroy-978397277" target= "_blank" alt="no alternative text">
          <i className="fa-brands fa-linkedin-in footer-icon">
            </i>
            </a>
            </li>
  </ul>



    

</footer>


)

}