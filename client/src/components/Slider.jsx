import { useEffect, useState } from 'react';
import Product from './Product';
import './slider.css';
import {  ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { products } from '../data';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };
  useEffect(() => {
    // Automatically slide to the next item every 8 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 8000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='slider'>
        <Product className="fade" {...products[currentIndex]}/>
        <button className='shop-btn'>Shop Now <ArrowRightOutlined/></button>
        <div className='slider-control'>
        <button onClick={prevSlide}><ArrowLeftOutlined/></button>
          <button onClick={nextSlide}><ArrowRightOutlined/></button>
        </div>
        
    </div>
  )
}

export default Slider