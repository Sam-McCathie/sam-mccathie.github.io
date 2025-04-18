import React, { useState } from "react";
import "./Carousel.css";

const contentArray = ["a", "b", "c", "d", "e"];

export const Carousel = () => {
  const [visibleItems, setVisibleItems] = useState(contentArray.slice(0, 3)); // Start with 3 items

  const next = () => {
    const nextItem =
      contentArray[
        (contentArray.indexOf(visibleItems[visibleItems.length - 1]) + 1) %
          contentArray.length
      ];
    setVisibleItems((prev) => [...prev.slice(1), nextItem]);
  };

  const previous = () => {
    const prevItemIndex =
      (contentArray.indexOf(visibleItems[0]) - 1 + contentArray.length) %
      contentArray.length;
    const prevItem = contentArray[prevItemIndex];
    setVisibleItems((prev) => [prevItem, ...prev.slice(0, -1)]);
  };

  return (
    <div className="carousel">
      <button onClick={previous}>Prev</button>
      <div className="content x3">
        {visibleItems.map((value, index) => (
          <div key={index} className="item">
            {value}
          </div>
        ))}
      </div>
      <button onClick={next}>Next</button>
    </div>
  );
};
