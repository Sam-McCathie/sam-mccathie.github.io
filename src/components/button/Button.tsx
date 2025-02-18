import * as React from "react";
import "./Button.css";

/**
 * Props for Button component when text is used.
 * @property {never} [svg] - SVG should not be provided when text is used.
 */
interface ButtonTextProps {
  text: string;
  svg?: never;
  onClick: () => void;
}

/**
 * Props for Button component when svg is used.
 * @property {never} [text] - Text should not be provided when svg is used.
 */
interface ButtonSvgProps {
  text?: never;
  svg: React.ReactNode;
  onClick: () => void;
}

type ButtonProps = ButtonTextProps | ButtonSvgProps;

/**
 * Button component that can either display text or an SVG, but not both.
 */
export const Button: React.FC<ButtonProps> = ({ onClick, text, svg }) => (
  <button onClick={onClick}>
    {text}
    {svg}
  </button>
);
