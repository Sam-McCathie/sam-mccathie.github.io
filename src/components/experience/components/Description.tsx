import React, { FC } from "react";

interface DescriptionProps {
  roleDescription: string[];
  className?: string;
}

export const Description: FC<DescriptionProps> = ({
  roleDescription,
  className = "",
}) => {
  return (
    <ul className={`description ${className}`}>
      {roleDescription.map((description) => (
        <li>{description}</li>
      ))}
    </ul>
  );
};
