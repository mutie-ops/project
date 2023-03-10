import img1 from '../imgs/img5.jpg'
import Text from '../Text'
function About(){

    const about = 
            <section className="about">
                <div className="heading">
                    <h2>About Me</h2>
                       
                </div>

                <div className="content"> 
                            <div className="contentBx">
                            <h3>I'm a Software Developer</h3>
                            <p>{Text.about}
                                    <br />
                                    While it may not be obvious to everyone,
                                     there are a number of reasons creating random paragraphs can be useful.
                                    A few examples of how some people use this
                                    generator are listed in the following paragraphs.
                                    </p>
                            </div>

                            <div className="w50">
                               <img src={img1}></img>
                            </div>
                    </div>
            </section>
 
      return about
}
export default About