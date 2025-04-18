import { ISkillData } from "types/skill-data";
import {
  CSSSVG,
  JavaScriptSVG,
  NodeJSSVG,
  ReactSVG,
  TypeScriptSVG,
  GraphQLSVG,
  PhpSVG,
  ExpressSVG,
} from "@svgs";
import React from "react";

export const technologies: ISkillData[] = [
  { skillName: "JavaScript", skillSVG: React.createElement(JavaScriptSVG) },
  { skillName: "TypeScript", skillSVG: React.createElement(TypeScriptSVG) },
  { skillName: "React", skillSVG: React.createElement(ReactSVG) },
  { skillName: "CSS", skillSVG: React.createElement(CSSSVG) },
  { skillName: "Node.js", skillSVG: React.createElement(NodeJSSVG) },
  { skillName: "Express.js", skillSVG: React.createElement(ExpressSVG) },
  { skillName: "GraphQL", skillSVG: React.createElement(GraphQLSVG) },
  { skillName: "Php", skillSVG: React.createElement(PhpSVG) },
];
