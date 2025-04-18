import React, { useState } from "react";
import "./Carousel.css";

const contentArray = ["a", "b", "c", "d", "e"];
const contentEndIndex = contentArray.length - 1;

export const Carousel = () => {
  const [itemIndex, setItemIndex] = useState(0);

  const next = () => {
    setItemIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex > contentEndIndex) return 0;
      return prev + 1;
    });
  };

  const previous = () => {
    setItemIndex((prev) => {
      const previousIndex = prev - 1;

      if (previousIndex === -1) return contentEndIndex;
      return prev - 1;
    });
  };

  console.log(itemIndex);

  return (
    <div className="carousel">
      <button onClick={previous}>Prev</button>
      <div className="content x3">
        {contentArray.map((value) => (
          <div key={value} className="item">
            {value}
          </div>
        ))}
      </div>
      <button onClick={next}>Next</button>
    </div>
  );
};
