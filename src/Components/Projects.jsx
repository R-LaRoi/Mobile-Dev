import React from 'react'
import CardsProject from './CardsProject'
import "./stylesheet/project.css"
import ProjectScroll from './ProjectScroll'
import data from './ProjectData'
import Nav from "./Nav"
import Footer from "./Footer";

export default function Projects() {

let projectCards = data.map( (project, index) => {

return(

<div className='dk-project-card'>
<div className='dk-card-text'>
   <a href={project.link}><img src={project.image} className='img-project'  key={index.id}/></a>
<div className='dk-title'>
{project.title.toUpperCase()}
</div>
<div className='dk-description'>
  {project.text}
</div>
</div>



</div>


)

})


  return(
    <>
<section className='pro-section'>
    <Nav/>
 <div className="two-col">

  <div className='pro-header'>
    projects
    <div className='p-title'>
REACT | Javascript | css | html
  <p className='text'>
  Interested in creating engaging projects and building interfaces that integrate new technologies and design patterns.
  

</p>

</div>

  </div>

<div className='pro-cards'>
  
  <div className='grid'>{projectCards}</div>
  </div>
{/* <div className='slider'><CardsProject /></div> */}
<div className='mb-scroll'><ProjectScroll/></div>
  

</div>





</section>
<Footer />
</>
  )
}