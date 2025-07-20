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
      "Built scalable, reusable, and themeable components that are aimed to be shared across the main app and client portal.",
      "Work with TypeScript, Tailwind, Base UI, Mantine, and other third-party libraries.",
      "Developing a modernised version of the client portal with a strong focus on UI/UX, with frequent design iterations.",
      "Contribute to evolving design systems and improving consistency across the application.",
      "Built flexible, data-driven forms designed to reduce the need for ongoing developer input.",
      "Present to both technical and non-technical senior stakeholders, translating complex technical concepts into easy to understand language.",
      "Resolve conflicting stakeholder expectations by listening actively, clarifying priorities, and building alignment around pragmatic solutions.",
      "Use AI where appropriate to optimise workflows and improve efficiency, while sharing insights with the team along the way.",
      "Prototyped ideas to improve UX.",
      "Completed project planning and sprint task estimation.",
      "Delivered high-quality work under tight deadlines while maintaining momentum and standards.",
    ],
  },
  {
    companyName: "Stuff",
    role: "Software Engineer",
    companyLogoPath: "/stuff-logo.png",
    employmentPeriod: "Jul 2023 - Dec 2024",
    roleDescription: [
      "Developed scalable, reusable components for the Stuff front-end Monorepo, supporting the main Stuff app and affiliated mastheads including The Press, The Post, and Waikato Times.",
      "Collaborated with Product Owners, Designers, QA, Solution Architects, and Stakeholders to align on project goals and deliverables.",
      "Simplified integration of third-party tools to enable stakeholders to make updates independently.",
      "Documented areas with limited coverage to improve clarity and support future development.",
      "Conducted pair programming sessions and reviewed pull requests to maintain high code quality.",
      "Participated in sprint planning, stand-ups, and retrospectives as part of an Agile team.",
    ],
  },
  {
    companyName: "Fergus",
    role: "Software Engineer",
    companyLogoPath: "/fergus-logo.png",
    employmentPeriod: "May 2022 - July 2023",
    roleDescription: [
      "Built new features and resolved bugs in the Fergus Go Mobile App using React Native, TypeScript, GraphQL, Docker, PHP, and Postgres. Contributed to the Fergus Web app Monolith, creating and updating APIs used by the mobile app.",
      "Completed technical and design reviews.",
      "Built clean, reusable, and testable components in line with best practices.",
      "Collaborated in pair programming sessions and peer code reviews, giving and applying constructive feedback.",
      "Collaborated closely with the Product Manager, Designer, and Tester.",
      "Led standups and facilitated quarterly retrospective reviews.",
    ],
  },
  {
    companyName: "Dacreed",
    role: "Full Stack Developer",
    companyLogoPath: "/dacreed-logo.png",
    employmentPeriod: "Jul 2021 - Apr 2022",
    roleDescription: [
      "Developed, maintained and contributed to static and web applications across several Dacreed products using React, Gatsby, Node.js, Scala, and the Play framework.",
      "Collaborated with UX designers and the core development team while also independently developing and testing features to support focused reading and content accessibility.",
      "Used GitKraken, Slack, Jira, and operated in a Linux environment to support development and team collaboration.",
    ],
  },
  {
    companyName: "Mission Ready",
    role: "Student",
    companyLogoPath: "/mission-ready-logo.png",
    employmentPeriod: "Feb 2021 - Oct 2021",
    roleDescription: [
      "Learned the essential full stack developer skills for both the front and backend of software development with a primary focus on developing my skills with React, JavaScript, CSS, Node.js, MySQL, and Githhub.",
      "Created chatbots with IBM Watson and an application that can detect different types of vehicles using AWS AI from an image uploaded to AWS S3 Bucket.",
      "Collaborated with UX designers on MVP's and Website redesigns while utilising agile methodologies and leveraging Trello and Miro.",
    ],
  },
];
