"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/image1.png", "/image2.png", "/image3.png"];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Swipe threshold in pixels to trigger slide change
  const swipeThreshold = 50;

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > swipeThreshold) {
      nextSlide();
    }

    if (touchEndX - touchStartX > swipeThreshold) {
      prevSlide();
    }

    // Reset touch positions
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div
      className="relative w-full overflow-hidden h-60h w-60w"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto"
              width={200}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
