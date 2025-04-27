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
    <div className={`description ${className}`}>
      <ul>
        {roleDescription.map((description) => (
          <li>{description}</li>
        ))}
      </ul>
    </div>
  );
};
