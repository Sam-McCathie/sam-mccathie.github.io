import { Button } from "@components";
import { scrollToTop } from "@helpers";
import React from "react";
import { NavArrowSVG } from "@svgs";
import "./ScrollUp.css";

export const ScrollUp = () => {
  return (
    <div className="scroll-up">
      <Button
        text="Scroll up"
        svg={<NavArrowSVG />}
        ariaLabel="Scroll to top"
        onClick={scrollToTop}
      />
    </div>
  );
};
