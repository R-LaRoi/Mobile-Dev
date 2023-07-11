import React from 'react'
import data from './ProjectData'
import './stylesheet/scroll.css'


export default function ProjectScroll() {

let cards = data.map((project,index) => {

  return (

<div className='mb-project-card'>
<div className='mb-card-text'>
<div className='mb-title'>
{project.title.toUpperCase()}
</div>
<div className='mb-description'>
  {project.text}
</div>
</div>

 <a href={project.link}><img src={project.image} className='thumbnail'  key={index.id}/></a>

</div>

  )
}


  )


return(
<div className=''>
{cards}
</div>

  )
  



}