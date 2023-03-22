import img1 from '../imgs/arts3.png'
import Text from '../Text'
function About(){

    const about = 
            <section className="about" id="about-">
                <div className="heading">
                    <h2>About Me</h2>
                       
                </div>

                <div className="content"> 
                            <div className="contentBx">
                            <h3>I'm a Software Developer</h3>
                            <p>{Text.about}<br></br>{Text.about2}</p>
                            </div>

                            <div className="w50">
                               <img className="img-el"src={img1}></img>
                            </div>
                    </div>
            </section>
 
      return about
}
export default About