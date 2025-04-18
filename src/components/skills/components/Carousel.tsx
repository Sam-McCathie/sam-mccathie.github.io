import React, { useEffect, useState } from "react";
import { Button } from "@components";
import { tools } from "@data";
import { NavArrowSVG } from "@svgs";
import { SkillIcon } from "./SkillIcon";
import "./Carousel.css";

const itemWidth = 80; // .skill-icon width + .content gap

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the starting index of visible items in dynamicArray

  const [visibleItems, setVisibleItems] = useState(
    window.innerWidth >= 540 ? 4 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(window.innerWidth >= 540 ? 4 : 2);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // Check if there are enough items to fill the visible area
      if (nextIndex + visibleItems > tools.length) {
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
        return Math.max(tools.length - visibleItems, 0); // Jump to the last set of items
      }
      return prevIndexAdjusted;
    });
  };

  return (
    <div className="carousel">
      <Button
        svg={<NavArrowSVG />}
        onClick={previous}
        ariaLabel="Navigate previous tool"
        className="previous"
      />
      <div className="content">
        <div
          className="items"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
          }}
        >
          {tools.map((data, index) => (
            <SkillIcon
              key={index}
              skillName={data.skillName}
              skillSVG={data.skillSVG}
            />
          ))}
        </div>
      </div>
      <Button
        svg={<NavArrowSVG />}
        onClick={next}
        ariaLabel="Navigate next tool"
        className="next"
      />
    </div>
  );
};
