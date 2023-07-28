import React, {useState} from 'react'
import './stylesheet/contact.css'
import elephant from "./assets/elephant.png"
import Nav from './Nav'
import Footer from './Footer'


export default function Contact() {


const [userName , setUserName] = useState('')
const [email , setEmail] = useState('')
const [userMessage, setUserMessage] = useState('')
const [confirmation, setConfirmation] = useState('')
let [showForm, setShowForm] = useState(false);
const [ helloWorld, setHelloWorld] = useState('')

 setTimeout(() => {
 setHelloWorld(
<div className='time-text'>world</div>
 
 )
}, 1000);



function clickedEmail(){
console.log("showing")
return(setShowForm(!showForm))


}
function sendMessage(e){
  e.preventDefault()
  setUserName('')
  setEmail('')
  setUserMessage('')
  setConfirmation(`Thank you ${userName} for your message!`)
  console.log("click")
  console.log(userName)
}



function showConfirmation(){
  setShowForm(!showForm)
  const contactMessage = "Always excited to hear  about new ideas. Send a message! I'm happy to connect." 
if (sendMessage) { 
  return confirmation
} else { contactMessage
 
}

console.log(userName)
}




  return(
    <section className='contact-page'>
  <div className='nav-'> <Nav /></div>
     
    <div className='contact-section'>
<div>  <img src={elephant} alt="" className='elephant'/></div>
      
        {/* <div className="parallelogram"></div> */}
           <div className='contact-header'>
           
              {/*  */}
                  <div className='c-text'>
               As an artist and developer innovation is essential throughout my creative process. 
While new technologies continue to unfold, I am interested in creating meaningful projects that have a positive impact.
<p style={{paddingTop:"10px"}}>
In addition to coding, I am a globetrotting, fit-for-life coach, currently based in eSwatini.
</p> 
<div className='icons'>
              <div className='p-title'><div>
                
                <div className='contact-icons'>
                <a href="https://github.com/R-LaRoi/" target= "_blank" alt="no alternative text"><i className="fa-brands fa-github icon"></i></a> 
                
                <a href="https://www.linkedin.com/in/rachel-stroy-978397277" target= "_blank" alt="no alternative text">
       <i className="fa-brands fa-linkedin-in icon"></i></a>
  
  <i className="fa-solid fa-envelope icon" onClick={clickedEmail}></i>

       <a href='https://www.rachelstroy.com/' target= "_blank" alt="no alternative text"><i className="fa-solid fa-palette icon"></i></a>
     
       </div>
       </div> 
   
        </div>
         
        </div>

     </div>
           


        
       

<div className=''>

    <div className='link-card'> 
<div style={{padding:"10px"}}> 
{showConfirmation ? `${confirmation}` : `${contactMessage}`}
  </div>



{showForm ? 
<form className='mobile-form' onSubmit={sendMessage}>
Let's connect!
  <input 
      type="text" 
      name="userName" 
      id="userName" 
      placeholder='name' 
      value={userName}
      onChange={(e)=> {
        setUserName(e.target.value)
  }}/>

        <input type="text"
        placeholder='email' 
        id='email'
        value={email}
        onChange={(e)=> {
          setEmail(e.target.value)
        }}
        />
        <textarea 
        type="text" 
        name="message" 
        id="1"
        value={userMessage}
        placeholder='enter message'
        onChange={(e)=>{
          setUserMessage(e.target.value)
        }}
        />

        <input type="submit"  
        onClick={showConfirmation}
        className='sub-btn'/>
</form> 
 : null }

  
  
         </div>


 </div>
        </div>    





    
      
  


 
   </div>
   <div className='contact-footer'> <Footer /></div>
  
 </section>
  )
}


