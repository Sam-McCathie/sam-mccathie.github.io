import React, { useEffect, useState } from "react";
import { Button } from "@components";
import { tools } from "@data";
import { NavArrowSVG } from "@svgs";
import { SkillIcon } from "./SkillIcon";
import "./Carousel.css";

const itemWidth = 72; // .skill-icon width + .content gap

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the starting index of visible items in dynamicArray
  const [visibleItems, setVisibleItems] = useState(2);

  // Variables for swipe detection
  const [startX, setStartX] = useState<number | null>(null);
  const [endX, setEndX] = useState<number | null>(null);

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (startX !== null && endX !== null) {
      const diff = startX - endX;
      if (diff > 50) {
        // Swipe left
        onNext();
      } else if (diff < -50) {
        // Swipe right
        onPrevious();
      }
    }
    // Reset swipe state
    setStartX(null);
    setEndX(null);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure this code only runs in the browser
      const handleResize = () => {
        setVisibleItems(window.innerWidth >= 540 ? 4 : 2);
      };

      handleResize(); // Set initial value based on current window size
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const onNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // Check if there are enough items to fill the visible area
      if (nextIndex + visibleItems > tools.length) {
        return 0; // Reset to the start
      }
      return nextIndex;
    });
  };

  const onPrevious = () => {
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
    <div
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Button
        svg={<NavArrowSVG />}
        onClick={onPrevious}
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
        onClick={onNext}
        ariaLabel="Navigate next tool"
        className="next"
      />
    </div>
  );
};
