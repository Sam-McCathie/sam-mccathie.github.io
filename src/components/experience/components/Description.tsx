import React, { FC } from "react";

interface DescriptionProps {
  roleDescription: string[];
  className?: string;
  onClick?: () => void;
}

export const Description: FC<DescriptionProps> = ({
  roleDescription,
  className = "",
  onClick,
}) => (
  <div className={`description ${className}`} onClick={onClick}>
    <ul>
      {roleDescription.map((description, index) => (
        <li key={index}>{description}</li>
      ))}
    </ul>
  </div>
);
