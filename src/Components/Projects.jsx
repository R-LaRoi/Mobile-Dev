import React from 'react'
import CardsProject from './CardsProject'
import "./stylesheet/project.css"


export default function Projects() {

  return(
<section className='pro-section'>
 <div div className="two-col">
  <div className='pro-header'>
    projects
    <div className='p-title'>
  REACT | JAVASCRIPT | HTML | CSS
  <p className='p-text'>
  Interested in building user interfaces that integrate new technologies and design patterns. Committed to creating projects that will engage and provide new perspectives.
</p>
</div>

  </div>
  <div className='slider'><CardsProject /></div>

</div>





</section>
  )
}