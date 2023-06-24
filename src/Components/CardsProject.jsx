import data from './ProjectData'
import slide6 from './assets/slide6.png'

export default function CardsProject(){

let cardSlides = data.map((cards,index) => { 

return(
      <div className="carousel-item">
      <img className="d-block w-75" src={cards.image}  key={index} alt=""/>
      <div className="carousel-caption d-print-block d-md-block">
    <div id='cap'>{cards.title.toUpperCase()}</div>
    <p className='cap-text'>{cards.text}</p>

    <div>
         <a href={cards.link}><i className="fa-solid fa-paper-plane" id='i-slide'></i></a>
      <a href={cards.git}><i className="fa-brands fa-github" id='i-slide'></i></a>
      
      </div>
  </div>
    </div>

)


  })

return(
<div>

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner"  >
   
   
    <div className="carousel-item active">
      <img className="d-block w-75" src={slide6} alt="no alt text"/>
      <div className="carousel-caption d-print-block d-md-block">
    <div>Password Generator</div>
 
  </div>
    </div>
    {cardSlides}
   
  
  
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


