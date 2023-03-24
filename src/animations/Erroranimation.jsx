import '../Animation.css'
import React from 'react'
import closer from '../imgs/icons/close-r.png'
import error from '../imgs/icons/error.png'
import sound from '../assets/pop.wav'
function Erroranimation(){

    const [hide, setHide] = React.useState(true)
   

    React.useEffect(function(){
        play()
      
    },[])

    function play(){
        new Audio(sound).play()
    }
    setTimeout(function() {
        setHide(false)
      }, 5000);
    
    

     function reset(){
        setHide(true)
     }
    const error_animation = 
    <div key={Math.random()} className={hide ?'errorpopup': 'errorpopup hide'}>
        <img className='tick'src={error} alt=''></img>
        <span className='popup-mess'>Message not sent</span>
        <img onClick={function(){
            setHide(false)
      }}
        className='ex' src={closer}alt='close'></img>
        {function(){
            reset()
        }}
    </div>

    return error_animation

}
export default Erroranimation