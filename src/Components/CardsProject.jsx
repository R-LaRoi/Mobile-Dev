import React from 'react'

import slide from'./assets/slide1.png'
import slide2 from'./assets/slide2.png'
import slide3 from'./assets/slide3.png'


export default function CardsProject(){


return(
<div>

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-50" src={slide} alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>fitness coach mobile app</h5>
    <p>whats the move</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-50" src={slide2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-50" src={slide3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  
</div>

)

}
