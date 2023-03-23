import images from "../Images"
import React from "react";
import { Link } from "react-router-dom";
import home from '../imgs/icons/home.png'
import close from '../imgs/icons/close-w.png'


function Gallery(){

    const [data,setData] = React.useState(images)
   
    function filterResults(tagItem){
        const result = images.filter(function(currentData){   
        return currentData.tag === tagItem})
        setData(result)
    }

    const [model, setModel]  = React.useState(false)
    const [imgTemplate, setImgTemplate] = React.useState('')
   

    function getImage(imgSrc){
        console.log(imgSrc)
        setImgTemplate(imgSrc)
        setModel(true)
        
    }
    
    const imageGallery =  data.map(function(item){
        let picture = item.img

        return  <div onClick={function(){
                getImage(item.img)}} 
                className="pics" key={item.id}><img className='pics_' src={picture} alt='gallery'></img>
                </div>})


    const gallery = 
     <div className="Gallery-page">
            <div className="gallery-header">
            <Link to="/" className="page"><img src={home} alt='back'></img></Link>

            <h2>Gallery</h2>
            </div> 
            <div className="filters-">
                    <button onClick={function(){
                                    setData(images)}}
                            className="filter-btn">ALL</button>
                    <button onClick={function(){
                                    filterResults('graphic_design')}}
                            className="filter-btn">GRAPHIC DESIGN</button>
                    <button onClick={function(){
                                    filterResults('photo_manipulation')}}
                            className="filter-btn">PHOTO MANIPULATION</button> 
                    <button onClick={function(){
                                    filterResults('cards')}}
                            className="filter-btn">CARDS</button>
                   
               </div>

            <div className="gallery"> 
                <>
                <div className={model ? "model open":"model"}>
                <img src={imgTemplate}alt=''></img>
                <img onClick={function(){
                        setModel(false)}}
                className="close" src={close} alt='close'></img>
                </div>
                {imageGallery}
                </>
                </div>
     </div>
    
       
    return gallery
}

export default Gallery