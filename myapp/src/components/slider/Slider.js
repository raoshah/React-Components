import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  'https://www.ranas.com/cdn/shop/files/saree_banner.png?v=1699614937&width=1500',
  'https://www.ranas.com/cdn/shop/files/4_bd4eb8cc-4ba3-4f19-9cf3-3bbbbfbcf52c.png?v=1699612603&width=1100',
  'https://www.ranas.com/cdn/shop/files/5_7c3753aa-13d6-4d9f-befb-49f9f1a21302.png?v=1699612818&width=1500',
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(timer);
  }, [length]);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="hero-slider">
      {images.map((img, index) => (
        <div
          className={`slide ${index === current ? 'active' : ''}`}
          key={index}
        >
          {index === current && <img src={img} alt={`Slide ${index}`} />}
        </div>
      ))}

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
