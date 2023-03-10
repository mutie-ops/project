import React from "react"
function Header(){

    const stickyHeader = React.useRef()

    React.useLayoutEffect(function(){
        const mainHeader = document.getElementById('Header')

        function fixedHeader(){      
            mainHeader.classList.toggle('sticky',window.scrollY > 0)}
        
        window.addEventListener('scroll',fixedHeader)
    },[])
    const header = 
    <div className="Header" id="Header" ref={stickyHeader}>
        <h1 className="logo">It2gO</h1>
         <ul className="list">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Contacts</a></li>
         </ul>
    </div>
   

         return header
}

export default Header