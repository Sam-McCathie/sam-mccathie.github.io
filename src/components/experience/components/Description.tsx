import React, { FC } from "react";

interface DescriptionProps {
  roleDescription: string[];
  className?: string;
}

export const Description: FC<DescriptionProps> = ({
  roleDescription,
  className = "",
}) => (
  <div className={`description ${className}`}>
    <ul>
      {roleDescription.map((description, index) => (
        <li key={index}>{description}</li>
      ))}
    </ul>
  </div>
);
