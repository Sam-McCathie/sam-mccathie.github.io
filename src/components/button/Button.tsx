import React from "react";
import "./Button.css";
import { ButtonProps } from "./types";

/**
 * Button component can either display text or an SVG, but not both.
 */
export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  svg,
  className,
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      className={`hover-animate ${className}`}
      aria-label={ariaLabel}
    >
      {text}
      {svg}
    </button>
  );
};
