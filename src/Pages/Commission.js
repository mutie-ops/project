import '../Commission.css'
import Img1 from '../imgs/comImages/image1.jpg'
import Img2 from '../imgs/comImages/image2.jpg'
import Img3 from '../imgs/comImages/image3.jpg'
import Img4 from '../imgs/comImages/image4.jpg'
import Img5 from '../imgs/comImages/image5.jpg'
import Img6 from '../imgs/comImages/image6.jpg'


function Commission(){

    const comission = 
        <div className='bodys'>
              <div className='card'>
                        <div className='image-content'>
                            <span className='overlay'></span>

                            <div className='card-image'>
                                <img className='card-img'src={Img1}></img>
                            </div>
                        </div>
                        <div className='card-content'>
                            <h2 className='name'>Web Design</h2>
                            <p className='description'>Non-profit websites: These websites are designed to promote a non-profit organization's mission, accept donations, and showcase volunteer opportunities.
                                                        Social networking websites: These websites are designed to connect people with similar interests and facilitate communication and sharing. Examples include Facebook, LinkedIn, and Twitter.</p>
                        
                            <button className='button'>View More</button>
                        </div>
                    </div>
        </div>
    return comission
}

export default Commission