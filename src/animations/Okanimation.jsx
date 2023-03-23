import '../Animation.css'
import close from '../imgs/icons/close-g.png'
import tick from '../imgs/icons/tick.png'
import React from 'react'
import sound from '../assets/pop.wav'
function Okanimation(){

    const [hide, setHide] = React.useState(true)

    const [value, setValue] = React.useState(0)

    React.useEffect(function(){
        play()
        
    },[value])

    function play(){
        new Audio(sound).play()
    }
    
    setTimeout(function() {
        setHide(false)
      }, 5000);
    
    const ok_animation = 
    <div key={Math.random()} className={hide ?'popup': 'popup hide'}>
        <img className='tick'src={tick} alt='icon'></img>
        <span className='popup-mess'>Message successfully sent</span>
        <img onClick={function(){
            setHide(false)}}

        className='ex' src={close} alt='close-icon'></img>
    </div>

    return ok_animation

}
export default Okanimation