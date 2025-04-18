import {
  AzureSVG,
  CopilotSVG,
  DockerSVG,
  FigmaSVG,
  GitHubSVG,
  GitSVG,
  JiraSVG,
  SlackSVG,
  TeamsSVG,
  TrelloSVG,
} from "@svgs";
import { ISkillData } from "@types";
import React from "react";

/* fix svg size ratios - much larger than regular tech skill icons 
  - Need to adjust max width/height of svg inside svg frame
*/
export const tools: ISkillData[] = [
  { skillName: "Git", skillSVG: React.createElement(GitSVG) },
  { skillName: "Figma", skillSVG: React.createElement(FigmaSVG) },
  { skillName: "Docker", skillSVG: React.createElement(DockerSVG) },
  { skillName: "Github", skillSVG: React.createElement(GitHubSVG) },
  { skillName: "Azure", skillSVG: React.createElement(AzureSVG) },
  { skillName: "Copilot", skillSVG: React.createElement(CopilotSVG) },
  { skillName: "Jira", skillSVG: React.createElement(JiraSVG) },
  { skillName: "Trello", skillSVG: React.createElement(TrelloSVG) },
  { skillName: "Teams", skillSVG: React.createElement(TeamsSVG) },
  { skillName: "Slack", skillSVG: React.createElement(SlackSVG) },
];
