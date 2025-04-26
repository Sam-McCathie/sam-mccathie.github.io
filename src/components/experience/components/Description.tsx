import React, { FC } from "react";

interface DescriptionProps {
  roleDescription: string[];
}

export const Description: FC<DescriptionProps> = ({ roleDescription }) => (
  <ul className="description">
    {roleDescription.map((description) => (
      <li>{description}</li>
    ))}
  </ul>
);
