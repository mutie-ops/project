import React from "react"
import logo from '../imgs/logo-.png'
import { Link } from "react-router-dom";
function Header(){

    const stickyHeader = React.useRef()

    React.useLayoutEffect(function(){
        const mainHeader = document.getElementById('Header')

        function fixedHeader(){      
            mainHeader.classList.toggle('sticky',window.scrollY > 0)}
             window.addEventListener('scroll',fixedHeader) 
    },[])

    // const [toggles, setToggles] = React.useState(false)


    function toggling(){
            let tog = document.getElementById('toggle')
            let side = document.getElementById('list')
            tog.classList.toggle('active')
            side.classList.toggle('menu')
        //     setToggles(function(toggles){
        //     return !toggles
        // })
    }
    

    const header = 
    <div className="Header" id="Header" ref={stickyHeader}>
        <img className="logo" src={logo}alt="logo"></img>
        <div onClick={toggling} className="toggle" id="toggle"></div>
         <ul className="list" id="list">
            <li onClick={toggling} className="list-el"><a   className="a-" href="#home">Home</a></li>
            <li onClick={toggling} className="list-el"><a   className="a-" href="#about-">About</a></li>
            <li onClick={toggling} className="list-el"><a className="a-" href="#serve">Services</a></li>
            <li onClick={toggling} className="list-el"><Link className="a-" to="/gallery">Gallery</Link></li>
            {/* <li onClick={toggling} className="list-el"><Link className="a-" to="/commission">Commission</Link></li> */}
            <li onClick={toggling} className="list-el"><a className="a-" href="#contacts">Contacts</a></li>
         </ul>
    </div>
   

         return header
}

export default Header