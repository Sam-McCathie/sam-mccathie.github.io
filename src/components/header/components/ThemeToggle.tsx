import React from "react";
import { useTheme } from "@context";
import { Button } from "@components";
import { MoonSVG, SunSVG } from "@svgs";

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
