import React, { useState } from "react";
import "./Carousel.css";

const contentArray = ["a", "b", "c", "d", "e"];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the starting index of visible items in dynamicArray

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length); // Wrap around to the start if at the end
  };

  const previous = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contentArray.length) % contentArray.length
    ); // Wrap around to the end if at the start
  };

  return (
    <div className="carousel">
      <button onClick={previous}>Prev</button>
      <div className="content x3">
        <div
          className="items"
          style={{
            transform: `translateX(-${currentIndex * 66}px)`, // 66px = width + gap
          }}
        >
          {contentArray.map((value, index) => (
            <div key={index} className="item">
              {value}
            </div>
          ))}
        </div>
      </div>
      <button onClick={next}>Next</button>
    </div>
  );
};
