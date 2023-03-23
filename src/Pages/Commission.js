import '../Commission.css'
import Info from './Info.js'


function Commission(){

    const data = Info.map(function(items){
      

        return(<div className='card'>
        <div className='image-content'>
            <span className='overlay'></span>

            <div className='card-image'>
                <img className='card-img'src={items.img}alt=""></img>
            </div>
        </div>
        <div className='card-content'>
            <h2 className='name'>{items.title}</h2>
            <p className='description'>{items.info}</p>
    
        </div>
    </div>)
    })

    const comission = 
    <div className='commission'>
         <h1 className='title'>Commission</h1>
        <div className='bodys'>
           
              {data}
        </div>
    </div>
   
    return comission
}

export default Commission