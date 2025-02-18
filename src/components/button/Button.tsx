import * as React from "react";
import "./Button.css";

interface ButtonProps {
  text?: string; // make a conditional type, either text or svg
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);
