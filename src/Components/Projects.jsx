import React from 'react'
import CardsProject from './CardsProject'
import "./stylesheet/project.css"
import ProjectScroll from './ProjectScroll'



export default function Projects() {

  return(
<section className='pro-section'>
 <div div className="two-col">
  {/* <div className="sq-p"></div> */}
  <div className='pro-header'>
    projects
    <div className='p-title'>

  <p className='text'>
  Interested in building user interfaces that integrate new technologies and design patterns and committed to creating projects that will engage and provide new perspectives.
   <div>
    <a href="https://github.com/R-LaRoi/" target= "_blank" alt="no alternative text"><i className="fa-brands fa-github" id='i-slide'></i></a> </div>
</p>

</div>

  </div>

<div className='slider'><CardsProject /></div>
<div className='mb-scroll'><ProjectScroll/></div>
  <div>

  </div>

</div>





</section>
  )
}