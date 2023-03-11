import image1 from '../imgs/icons/graphic design.png'
import image2 from '../imgs/icons/photo editing.png'
import image3 from '../imgs/icons/web design.png'
import image4 from '../imgs/icons/consultation.png'
import image5 from '../imgs/icons/micro services.png'
import image6 from '../imgs/icons/web development.png'
function Services(){

    const service1 = 
    <div className="seviceBx">
                    <img className='imgs' src={image1}></img>
                    <h3>Graphic Design</h3>
                    <p>We do graphic design</p>
                </div>
    const service2 = 
    <div className="seviceBx">
                    <img className='imgs' src={image2}></img>
                    <h3>Photo Editing</h3>
                    <p>We do photo editing</p>
                </div>

    const service3 = 
    <div className="seviceBx">
                <img className='imgs' src={image3}></img>
                <h3>Web Design</h3>
                <p>We do web designing</p>
                </div>

    const service4 = 
    <div className="seviceBx">
                <img className='imgs' src={image4}></img>
                <h3>IT consultation</h3>
                <p>IT inquiry and many more IT services</p>
                </div>

    const service5 = 
    <div className="seviceBx">
                <img className='imgs' src={image5}></img>
                <h3>Micro Services</h3>
                <p>Build services to integrate to existing web applications</p>
                </div>

    const service6 = 
    <div className="seviceBx">
                <img className='imgs' src={image6}></img>
                <h3>Web development</h3>
                <p>Build website at fair prices</p>
                </div>

    const services = 
    <section className="services">
    <div className="white">
        <h2>Services</h2>
        <p>This are the services we offer as of now</p>
            <div className="contents">
                {service1}
                {service2}
                {service3}
                {service4}
                {service5}
                {service6}
            </div>
           
    </div>
    </section>

    return services
}


export default Services