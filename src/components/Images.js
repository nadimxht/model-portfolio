import React from 'react';
import photo from '../img/photo.jpg'
import photo8 from '../img/IMG_2907.jpg'
import photo3 from '../img/IMG_0128.PNG'
import photo4 from '../img/IMG_2986.jpg'
import photo6 from '../img/image11.jpg'
import photo5 from '../img/IMG_2987.jpg'
import photo7 from '../img/photo2.jpg'
import photo9 from '../img/IMG_3861.jpg'
import photo10 from '../img/IMG_3862.jpg'
import photo11 from '../img/kha.jpg'
import photo12 from '../img/kha2.jpg'
import photo13 from '../img/nnn.jpg'
import photo14 from '../img/IMG_5851.jpg'
import photo15 from '../img/jjj.jpg'








import './Images.css'

export default function Images() {
    return (
        <div className="container" >
          
            <div className="row" >
            
            <img  src={photo12} className='col-6'/>
            
                <img  src={photo14} className='col-3'/>
                <img  src={photo13} className='col-3'/>
                <img  src={photo11} className='col-3'/>
               
                
            </div>
               
            <div className="row" >
                <img  src={photo10} className='col-3'/>
                <img  src={photo7} className='col-3'/>
                <img  src={photo9}  className='col-6 two'/>
            </div>
            <div className="row">
                <img  src={photo15} className='col-6 two2'/>
                <img  src={photo} className='col-6 two2'/>
            </div>
            <div className="row">
            <img  src={photo6} className='col-3'/>
            
                <img  src={photo4} className='col-3'/>
                <img  src={photo5} className='col-3'/>
                <img  src={photo3}  className='col-3'/>
            </div>
           
           
           
        </div>
    )
}
