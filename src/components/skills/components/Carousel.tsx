import React, { useState } from "react";
import "./Carousel.css";

const contentArray = ["a", "b", "c", "d", "e"];
const itemWidth = 66; // Width of each item including gap
const visibleItems = 2; // Number of items visible in the carousel at once

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the starting index of visible items in dynamicArray

  const next = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // Check if there are enough items to fill the visible area
      if (nextIndex + visibleItems > contentArray.length) {
        return 0; // Reset to the start
      }
      return nextIndex;
    });
  };

  const previous = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexAdjusted = prevIndex - 1;
      // Check if going back leaves enough items to fill the visible area
      if (prevIndexAdjusted < 0) {
        return Math.max(contentArray.length - visibleItems, 0); // Jump to the last set of items
      }
      return prevIndexAdjusted;
    });
  };

  return (
    <div className="carousel">
      <button onClick={previous}>Prev</button>
      <div
        className="content"
        style={
          {
            "--items": visibleItems, // Dynamically set the --items variable
          } as React.CSSProperties
        }
      >
        <div
          className="items"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
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
