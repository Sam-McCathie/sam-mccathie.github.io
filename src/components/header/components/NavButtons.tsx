import { Button } from "@components";
import React, { useEffect, useState } from "react";
import { generateNavSections, handleScroll } from "../helpers";

interface Section {
  text: string;
  id: string;
  ariaLabel: string;
}

export const NavButtons = () => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    setSections(generateNavSections());
  }, []);

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
