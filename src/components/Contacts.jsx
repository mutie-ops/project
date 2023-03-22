import img1 from '../imgs/icons/facebook-bw.png'
import img2 from '../imgs/icons/twitter-bw.png'
import img3 from '../imgs/icons/instagram-bw.png'
import img4 from '../imgs/icons/gmail-bw.png'
import img5 from '../imgs/icons/youtube-bw.png'
import emailjs from '@emailjs/browser';
import React from 'react'
import Okanimation from '../animations/Okanimation'
import Erroranimation from '../animations/Erroranimation'

function Contacts(){
    const [alert,  setAlert] = React.useState()
    const [error_alert, setError_alert] = React.useState()

    const form = React.useRef()

    function sendEmail(e){
        e.preventDefault()
        

        emailjs.sendForm('service_1y40h0s', 'template_e3jjo6b', form.current, '3AUVcPffj0pCp67Tp')
        .then((result) => {
            console.log(result.text);
            setAlert(function(){
                return < Okanimation />
            })
           
        }, (error) => {
            console.log(error.text);
            setError_alert(function(){
                return <Erroranimation />
            })
        })
        e.target.reset()
    }
   
   
    const contacts = 
        
        <section className="Contacts" id="contacts">
            {alert}
            {error_alert}
            <div className="contact-el">

                <h2>Contacts</h2>
            <div className="container">
                <div className="Info-el">

                <h2>Contact Info</h2>
                    <p>Address<br>
                    </br>
                    <span>Nairobi Kenya</span></p>

                    <p>Phone<br>
                    </br>
                    <span>+254 722534515</span></p>

                    <p>Email<br>
                    </br>
                   
                   
                     <span>benjaminmutie53@gmail.com</span></p>

                <ul className='footer-el'>
                    <li><a target='_blank' href="https://www.facebook.com/"><img src={img1} alt="" /></a></li>
                    <li><a target='_blank' href="https://twitter.com/messages"><img src={img2} alt="" /></a></li>
                    <li><a target='_blank' href="https://www.instagram.com/direct/inbox/"><img src={img3} alt="" /></a></li>
                    {/* <li><a href=""><img src={img4} alt="" /></a></li>
                    <li><a href=""><img src={img5} alt="" /></a></li>
                 */}
                
                </ul>


                </div>
                <div className="Info">
                        <h1>Contact Form</h1>
                       <form ref={form} onSubmit={sendEmail} className='InfoBx'>
                            <input type="text" placeholder="name"name='user_name' required />
                            <input type="email" placeholder="Email" name='user_email' required />
                            <input type="text" placeholder="Subject" name= 'subject' required />
                            <textarea name='message' className='message' cols="30" rows="10"></textarea>
                            <button type='submit'  className="btn">Send Message</button>
                    

                       </form>
                </div>
            </div>
           
    </div>
        </section>
    return contacts
}

export default Contacts