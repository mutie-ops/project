import image1 from '../imgs/icons/graphic design.png'
import image2 from '../imgs/icons/photo editing.png'
import image3 from '../imgs/icons/web design.png'
import image4 from '../imgs/icons/consultation.png'
import image5 from '../imgs/icons/micro services.png'
import image6 from '../imgs/icons/web development.png'
import Text from '../Text'
import React from 'react'

// THere is gotta be a better way to do this
function Services(){

  
    function toggling(){
        const toggle_more = document.getElementById('more')
        toggle_more.parentNode.classList.toggle('active-')
    }
    function toggling2(){
        const toggle_more = document.getElementById('more2')
        toggle_more.parentNode.classList.toggle('active-')
    }

    
    function toggling3(){
        const toggle_more = document.getElementById('more3')
        toggle_more.parentNode.classList.toggle('active-')
    }
    function toggling4(){
        const toggle_more = document.getElementById('more4')
        toggle_more.parentNode.classList.toggle('active-')
    }

    
    function toggling5(){
        const toggle_more = document.getElementById('more5')
        toggle_more.parentNode.classList.toggle('active-')
    }
    function toggling6(){
        const toggle_more = document.getElementById('more6')
        toggle_more.parentNode.classList.toggle('active-')
    }


    const service1 = 
    <>
     <div className="icon-"> 
        <img className='imgs' src={image1} alt='icon'></img>
    </div>  
        <div className='content-'>
            <h3>Graphic Design</h3>
            <p>{Text.graphicDesign}</p>
            <h2>charges</h2>
            <h1> $25 USD per design</h1>
        </div>
        <a onClick={toggling}className='more' id='more'></a>
    </>
   
       
    const service2 = 
    <>
     <div className="icon-"> 
        <img className='imgs' src={image2} alt='icon img'></img>
    </div>  
        <div className='content-'>
            <h3>Photo Editing</h3>
            <p>{Text.photoEditing}</p>
            <h2>charges</h2>
            <h1> $15 USD per Edit</h1>
        </div>
        <a onClick={toggling2}className='more' id='more2'></a>
    </>
   

    const service3 = 
    <>
     <div className="icon-"> 
        <img className='imgs' src={image3} alt='icon-img'></img>
    </div>  
        <div className='content-'>
            <h3>Web Design</h3>
            <p>{Text.webDesign}</p>
            <h2>charges</h2>
            <h1> $60 - $100 USD per design</h1>
        </div>
        <a onClick={toggling3}className='more' id='more3'></a>
    </>

    const service4 = 
    <>
    <div className="icon-"> 
       <img className='imgs' src={image4} alt='icon-img'></img>
   </div>  
       <div className='content-'>
           <h3>IT Consultation</h3>
           <p>{Text.consultation}</p>
           <h2>charges</h2>
            <h1> Free - $10 USD</h1>
       </div>
       <a onClick={toggling4}className='more' id='more4'></a>
   </>
    const service5 = 
    <>
     <div className="icon-"> 
        <img className='imgs' src={image5} alt='icon-img'></img>
    </div>  
        <div className='content-'>
            <h3>Micro Services</h3>
            <p>{Text.microservices}</p>
            <h2>charges</h2>
            <h1> $1500 USD</h1>
        </div>
        <a onClick={toggling5}className='more' id='more5'></a>
    </>
    const service6 = 
    <>
    <div className="icon-"> 
       <img className='imgs' src={image6}alt='icon-img'></img>
   </div>  
       <div className='content-'>
           <h3>Web Development</h3>
           <p>{Text.webDevelopment}</p>
           <h2>charges</h2>
            <h1> $2000 USD</h1>
       </div>
       <a onClick={toggling6}className='more' id='more6'></a>
   </>

    const services = 
        <div className='serve' id='serve'>
            <h1>Services</h1>
    <section className="services" id="services-">
       
     <div className='container-'>
        <div className='card-'>
            {service1}
        </div>

         <div className='card-'>
            {service2}
        </div>

        <div className='card-'>
            {service3}
        </div>
        <div className='card-'>
            {service4}
        </div>

        <div className='card-'>
            {service5}
        </div>
        <div className='card-'>
            {service6}
        </div> 

            

     </div>
   
   
    
    </section>
        </div>
    return services
}


export default Services