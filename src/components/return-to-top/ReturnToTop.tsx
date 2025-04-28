import React from "react";
import { Button } from "@components";
import "./ReturnToTop.css";
import { NavArrowSVG } from "@svgs";

export const ReturnToTop = () => {
  const handleReturnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="return-to-top">
      <Button
        svg={<NavArrowSVG />}
        ariaLabel="Return to top"
        onClick={handleReturnToTop}
      />
    </div>
  );
};
