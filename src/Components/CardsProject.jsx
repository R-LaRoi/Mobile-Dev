import data from './ProjectData'
import slide from './assets/slide1.png'

export default function CardsProject(){

let cardSlides = data.map((cards,index) => { 

return(
      <div className="carousel-item">
      <img className="d-block w-75" src={cards.image}  key={index} alt=""/>
      <div className="carousel-caption d-none d-md-block">
    <h5>{cards.title}</h5>
    <p>{cards.text}</p>
  </div>
    </div>

)


  })

return(
<div>

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner"  >
    <div className="carousel-item active">
      <img className="d-block w-75" src={slide} alt="fitness profile"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>fitness coach mobile app</h5>
    <p>whats the move</p>
  </div>
    </div>
    {cardSlides}
   
  
    {/* <div className="carousel-item">
      <img className="d-block w-75" src="" alt="last slide"/>
 ###
    </div> */}
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

console.log(slide)
