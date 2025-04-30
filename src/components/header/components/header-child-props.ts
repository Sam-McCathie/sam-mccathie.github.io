import { Section } from "@types";

export interface HeaderChildProps {
  sections: Section[];
  onClick: () => void;
  isHamburgerOpen: boolean;
}
