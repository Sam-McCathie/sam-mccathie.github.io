export interface Role {
  companyName: string;
  companyLogoPath: string;
  companyWebsite: string;
  employmentPeriod: string;
  roleDescription: string[];
}

export const roles: Role[] = [
  {
    companyName: "Stuff",
    companyLogoPath: "/stuff-logo.png",
    companyWebsite: "https://www.stuff.co.nz/",
    employmentPeriod: "Jul 2023 - Dec 2024",
    roleDescription: [
      "Developed scalable, reusable components for the Stuff front-end Monorepo, supporting the main Stuff app and affiliated Masthead products (e.g., The Press, The Post, Waikato Times).",
      "Collaborated cross-functionally with Product Owners, Designers, QA, Solution Architects, and Stakeholders to align on project goals and deliverables. Simplified integration of third-party tools to empower stakeholders to make updates  independently, reducing reliance on  developer intervention.",
      "Documented areas with insufficient coverage to improve clarity and ease  of future development.",
      "Conducted pair programming sessions and peer-reviewed pull requests  to maintain high code quality standards.",
      "Worked within agile sprint cycles and contributed to experimental mission-based structures to optimise team efficiency.",
    ],
  },
];
