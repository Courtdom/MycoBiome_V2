import React, { useState, useEffect } from "react";
import "./ImageSlider.scss";

function ImageSlider({ images, duration }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images, duration]);

  return (
    <div className="slider">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="sliding"
          className={`slide ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
