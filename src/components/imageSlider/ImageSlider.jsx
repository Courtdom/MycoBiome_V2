import React, { useState, useEffect } from "react";
import "./ImageSlider.scss";

const ImageSlider = ({ images, duration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images, duration]);

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt="sliding" />
    </div>
  );
};

export default ImageSlider;
