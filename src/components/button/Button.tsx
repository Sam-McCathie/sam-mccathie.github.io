import * as React from "react";
import "./Button.css";
import { ButtonProps } from "./types";

/**
 * Button component that can either display text or an SVG, but not both.
 */
export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  svg,
  className,
  ariaLabel,
}) => {
  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel}>
      {text}
      {svg}
    </button>
  );
};
