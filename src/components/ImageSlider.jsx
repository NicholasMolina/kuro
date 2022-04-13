import React, {useState} from 'react';
import { SliderData }  from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import "./styles/SliderData.css"


const ImageSlider = ({slides}) => {
const [current,setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
};

console.log(current);

if(!Array.isArray(slides) || slides.lenght <= 0){
    return null;
}

  return (
      <section className='slider'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return(
                <div className={index === current ? 'slide active' : 'slide'} 
                key={index}
                >
                    {index === current &&(
                    <img src={slide.image} className='image '/>
                )}
                </div>
                );    
})}
      </section>

    // <div className='slider-container'>
    //      <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3
    //     bg-red-400 flex justify-between item-center'>
    //         <button>Anterior</button>
    //         <button>Siguiente</button>
    //     </div>
    //     <div className='slider' >
    //     {SliderData.map(image => (
    //         <div className='item'>
    //             <img src={image} alt='travel image' />
    //         </div>        
    //     ))}        
    //     </div>
    // </div>
    );
};

export default ImageSlider;