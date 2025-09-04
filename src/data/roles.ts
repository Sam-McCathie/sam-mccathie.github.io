export interface Role {
  companyName: string;
  role: string;
  companyLogoPath: string;
  employmentPeriod: string;
  roleDescription: string[];
}

export const roles: Role[] = [
  {
    companyName: "Advice Link",
    role: "Software Engineer",
    companyLogoPath: "/advice-link-logo.png",
    employmentPeriod: "May 2025 - Present",
    roleDescription: [
      "Advice Link is part of the NZHL umbrella and a subsidiary of KiwiBank. The application is used by mortgage advisors and insurance brokers across New Zealand.",
      "Tech Stack - React, TypeScript, Tailwind, Base UI, Mantine, and other third party libraries.",
      "Navigated shifting priorities and delivered production ready components under tight deadlines.",
      "Built scalable, reusable, themeable, data driven components.",
      "Developed a modern Client Portal.",
      "Contributed to evolving design systems and improving UI/UX across the application.",
      "Presented to both technical and non-technical senior stakeholders, translating complex technical concepts into easy to understand language.",
      "Independently completed sprint planning and provided reliable estimates.",
      "Advocated for AI-based tools to speed up routine development tasks, which saved countless hours of developer time.",
    ],
  },
  {
    companyName: "Stuff",
    role: "Software Engineer",
    companyLogoPath: "/stuff-logo.png",
    employmentPeriod: "Jul 2023 - Dec 2024",
    roleDescription: [
      "Stuff is the most popular media company in New Zealand, reaching millions of users every month.",
      "Tech Stack - React, TypeScript, many third party tools, plugins and services.",
      "Developed scalable, reusable components for the Stuff replatform and Masthead sites (The Post, Press, and Waikato Times).",
      "Refactored code in third party tools to enable stakeholders to make updates independently.",
      "Collaborated with Product Owners, Designers, QA, Solution Architects, and Stakeholders to align on project goals and deliverables.",
      "Conducted pair programming sessions and reviewed pull requests to maintain high code quality.",
      "Created documentation for niche tools to facilitate knowledge sharing.",
      "Participated in sprint planning, stand-ups, and retrospectives as part of an Agile team.",
    ],
  },
  {
    companyName: "Fergus",
    role: "Software Engineer",
    companyLogoPath: "/fergus-logo.png",
    employmentPeriod: "May 2022 - July 2023",
    roleDescription: [
      "Fergus is a job management software for tradies which covers job tracking, invoicing, and reporting all in one place.",
      "Tech Stack - React Native, TypeScript, GraphQL, Docker, PHP, and Postgres.",
      "Built clean, reusable, and testable components in line with best practices.",
      "Led standups and facilitated quarterly retrospective reviews.",
      "Collaborated in pair programming sessions and peer code reviews, giving and applying constructive feedback.",
      "Contributed to the Modern Fergus Go Mobile App and Web App Monolith.",
      "Built new features, maintained legacy code, resolved bugs, created and updated APIs.",
      "Collaborated closely with the Product Manager, Designer, and QA Tester.",
      "Participated in technical and design reviews (1 on 1 and in groups).",
    ],
  },
  {
    companyName: "Dacreed",
    role: "Full Stack Developer",
    companyLogoPath: "/dacreed-logo.png",
    employmentPeriod: "Jul 2021 - Apr 2022",
    roleDescription: [
      "Dacreed is a learning experience platform for regulated industries like financial services and education.",
      "Tech Stack - React, Gatsby, Node.js, Scala, and the Play framework.",
      "Developed, maintained and contributed several Dacreed products (Dacreed App and multiple static blog sites).",
      "Collaborated with UX designers and the core development team while also independently developing and testing features to support focused reading and content accessibility.",
    ],
  },
  {
    companyName: "Mission Ready",
    role: "Student",
    companyLogoPath: "/mission-ready-logo.png",
    employmentPeriod: "Feb 2021 - Oct 2021",
    roleDescription: [
      "Mission Ready’s Full Stack Developer Accelerator is a fast-paced, immersive training programme designed to launch careers in full-stack development.",
      "Learned the essential full stack developer skills for both the front and backend of software development with a primary focus on developing my skills with React, JavaScript, CSS, Node.js, MySQL, and Githhub.",
      "Created chatbots with IBM Watson and an application that can detect different types of vehicles using AWS AI from an image uploaded to AWS S3 Bucket.",
      "Collaborated with UX designers on MVP's and Website redesigns while utilising agile methodologies and leveraging Trello and Miro.",
    ],
  },
];
