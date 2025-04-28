import React from "react";
import { Button } from "@components";
import { NavArrowSVG } from "@svgs";
import { scrollToTop } from "@helpers";
import "./ScrollToTopBtn.css";

export const ScrollToTopBtn = () => {
  return (
    <div className="return-to-top">
      <Button
        svg={<NavArrowSVG />}
        ariaLabel="Return to top"
        onClick={scrollToTop}
      />
    </div>
  );
};
