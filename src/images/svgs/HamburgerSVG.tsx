import React from "react";

/* Default stroke added or else svg would be invisible*/

export const HamburgerSVG = () => (
  <svg
    viewBox="0 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
    className="hamburger"
    stroke="#2c2c2c"
  >
    <path
      d="M4.29688 19.1406H20.7031M4.29688 12.8906H20.7031M4.29688 6.64062H20.7031"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
