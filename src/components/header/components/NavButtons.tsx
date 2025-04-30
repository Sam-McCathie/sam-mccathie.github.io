import { Button } from "@components";
import { Section } from "@types";
import React, { FC, useEffect, useState } from "react";
import { generateNavSections, handleScroll } from "../helpers";

interface NavButtonsProps {
  customFunction?: () => void;
}

export const NavButtons: FC<NavButtonsProps> = ({ customFunction }) => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    setSections(generateNavSections());
  }, []);

  const handleOnClick = (id: string) => () => {
    handleScroll(id);
    customFunction && customFunction();
  };

  return (
    <div className="nav-buttons">
      {sections.map(({ text, id, ariaLabel }) => (
        <Button
          key={text}
          text={text}
          onClick={handleOnClick(id)}
          ariaLabel={ariaLabel}
        />
      ))}
    </div>
  );
};
