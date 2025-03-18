import React from "react";
import { useTheme } from "../../../context";
import { MoonSVG, SunSVG } from "../../../images";
import { Button } from "../../button";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  if (theme === "light") {
    return (
      <Button
        svg={<SunSVG />}
        className="theme-toggle"
        ariaLabel="Current mode: Light"
        onClick={toggleTheme}
      />
    );
  }

  return (
    <Button
      svg={<MoonSVG />}
      className="theme-toggle"
      ariaLabel="Current mode: Dark"
      onClick={toggleTheme}
    />
  );
};
