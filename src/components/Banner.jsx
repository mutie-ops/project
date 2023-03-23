import img1 from '../imgs/icons/facebook-c.png'
import img2 from '../imgs/icons/twitter-c.png'
import img3 from '../imgs/icons/instagram-c.png'
import img4 from '../imgs/icons/gmail-c.png'
function Banner(){

    const banner = 
    <section className="banner" id="home">
         <div className='info-sec'>
            <h2>Hello I'm</h2>
            <span> Mutie Mutisya</span>
            <h3>Im a Software Developer</h3>
            <div className='social-container'>
                <ul className="socials">
                    <li className='social-media'><a target='_blank' rel="noreferrer" href="https://www.facebook.com/profile"><img src={img1} alt="" /></a></li>
                    <li className='social-media'><a target='_blank' rel="noreferrer" href="https://twitter.com/messages"><img src={img2} alt="" /></a></li>
                    <li className='social-media'><a target='_blank' rel="noreferrer" href="https://www.instagram.com/direct/inbox/"><img src={img3} alt="" /></a></li>
                    <li className='social-media'><a href="#contacts"><img src={img4} alt="" /></a></li>
                  
                </ul>
            </div>
         </div>
    </section>
   
    return banner 

       
    
}

export default Banner