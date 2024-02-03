"use client";

import React, { useState, useEffect, useRef } from "react";
import "./carouselstyles.css";

const Carousel = ({ images, interval = 5000, inMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef1 = useRef();
  const imageRef2 = useRef();
  const imageRef3 = useRef();

  useEffect(() => {
    applyStyles();
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    setTimeout(() => {
      removeStyles();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length, interval]);

  const applyStyles = () => {
    if (inMobile) {
      if (imageRef1.current) {
        imageRef1.current.classList.add("animatedImage1");
      }
    } else {
      if (imageRef1.current && imageRef2.current && imageRef3.current) {
        imageRef1.current.classList.add("animatedImage1");
        imageRef2.current.classList.add("animatedImage2");
        imageRef3.current.classList.add("animatedImage3");
      }
    }
  };

  const removeStyles = () => {
    if (inMobile) {
      if (imageRef1.current) {
        imageRef1.current.classList.remove("animatedImage1");
      }
    } else {
      if (imageRef1.current && imageRef2.current && imageRef3.current) {
        imageRef1.current.classList.remove("animatedImage1");
        imageRef2.current.classList.remove("animatedImage2");
        imageRef3.current.classList.remove("animatedImage3");
      }
    }
  };

  const getRef = (stringRef) => {
    const refs = {
      imageRef1: imageRef1,
      imageRef2: imageRef2,
      imageRef3: imageRef3,
    };

    return refs[stringRef];
  };

  const renderImages = () => {
    const displayedImages = images.slice(
      currentIndex,
      currentIndex + (inMobile ? 1 : 3)
    );
    const remainingImages = images.slice(
      0,
      Math.max(0, (inMobile ? 1 : 3) - displayedImages.length)
    );

    return [...displayedImages, ...remainingImages];
  };

  return (
    <div className="carousel-container">
      <div
        className={`carousel-wrapper  flex ${
          inMobile ? "justify-center" : "justify-between"
        } items-center`}
      >
        {renderImages().map((image, index) => (
          <div
            key={index}
            className={`${inMobile ? "carousel-item-mobile" : "carousel-item"}`}
          >
            <img
              id={image}
              ref={getRef(`imageRef${index + 1}`)}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`rounded-md`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
