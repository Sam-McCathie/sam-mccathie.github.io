export interface Role {
  companyName: string;
  role: string;
  companyLogoPath: string;
  employmentPeriod: string;
  roleDescription: string[];
}

export const roles: Role[] = [
  {
    companyName: "Stuff",
    role: "Software Engineer",
    companyLogoPath: "/stuff-logo.png",
    employmentPeriod: "Jul 2023 - Dec 2024",
    roleDescription: [
      "Developed scalable, reusable components for the Stuff front-end Monorepo, supporting the main Stuff app and affiliated Masthead products (e.g., The Press, The Post, Waikato Times).",
      "Collaborated cross-functionally with Product Owners, Designers, QA, Solution Architects, and Stakeholders to align on project goals and deliverables. Simplified integration of third-party tools to empower stakeholders to make updates  independently, reducing reliance on  developer intervention.",
      "Documented areas with insufficient coverage to improve clarity and ease  of future development.",
      "Conducted pair programming sessions and peer-reviewed pull requests  to maintain high code quality standards.",
      "Worked within agile sprint cycles and contributed to experimental mission-based structures to optimise team efficiency.",
    ],
  },
  {
    companyName: "Fergus",
    role: "Full Stack Engineer",
    companyLogoPath: "/fergus-logo.png",
    employmentPeriod: "May 2022 - July 2023",
    roleDescription: [
      "Primarily working on the Fergus Go Mobile App that utilises React Native, Typescript, GraphQL, PHP, and Postgres. In addition, I work on the main Fergus Web app Monolith, usually when updating or creating new APIs to utilise on the mobile app.",
      "Regularly write unit tests and complete technical and design reviews.",
      "Collaborate closely with the Product Manager, Designer, and Tester.",
      "Regularly run standups and facilitate quarterly reviews.",
      "Utilise Slack for communication and Jira to manage tasks and sprints.",
      "Regularly participate in peer programming sessions and review my peers' PRs",
      "Work on 2-week sprint cycles and deploy using GitHub actions workflow.",
      "Write documentation on Notion to share knowledge with my immediate and wider team.",
    ],
  },
  {
    companyName: "Dacreed",
    role: "Full Stack Developer",
    companyLogoPath: "/dacreed-logo.png",
    employmentPeriod: "Oct 2021 - Mar 2022",
    roleDescription: [
      "Managed and updated dacreed.com, learnplus.ac.nz, teamsplus.co.nz and pressroom.dacreed.com static sites that all use the React-based Gatsby framework. Build the core of a static site for an unreleased Dacreed product.",
      "Worked on projects within the main live.teamsplus.app site that utilises Scala and the Play framework.",
      "Prototyped innovative ideas for the TeamsPlus platform written in vanilla JavaScript that will be integrated into the live.teamsplus.app site in the future.",
      "Operated on a Linux OS, using Slack, GitKraken, and Jira for collaboration with the development team, wider team, and new interns.",
    ],
  },
  {
    companyName: "Dacreed",
    role: "Intern",
    companyLogoPath: "/dacreed-logo.png",
    employmentPeriod: "Jul 2021 - Oct 2021",
    roleDescription: [
      "Designed and developed innovative prototypes to enhance the user experience of learners completing online courses inside of a progressive web application. The application was created using React, Node.js, Postgres and hosted on Heroku.",
      "Collaborated with UX designers and core Dacreed's development team.",
      "Independently prototyped innovative way users can read large bodies of text online that helps users focus more easily and not lose their place. This prototype went through two rounds of testing and development and will be added to the Dacreed platform in 2022.",
      "Concluded the internship by learning Linux, Scala, Intellij (IDE) and GitKraken.",
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
