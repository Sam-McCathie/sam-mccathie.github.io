import { Button } from "@components";
import { Section } from "@types";
import React, { FC } from "react";
import { handleScroll } from "../helpers";

interface NavButtonsProps {
  sections: Section[];
}

export const NavButtons: FC<NavButtonsProps> = ({ sections }) => {
  return (
    <div className="nav-buttons">
      {sections.map(({ text, id, ariaLabel }) => (
        <Button
          key={text}
          text={text}
          onClick={handleScroll(id)}
          ariaLabel={ariaLabel}
        />
      ))}
    </div>
  );
};
