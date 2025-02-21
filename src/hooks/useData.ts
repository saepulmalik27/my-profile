import { Github, Linkedin, Twitter } from "lucide-react";

export const useData = () => {
    const experience = 
        [
          {
            title:
              "Frontend Engineer | PT Inspigo Inovasi Indonesia (2021 - Present)",
            responsibilities: [
              "Built and maintained high-performance web applications using Next.js and React.",
              "Implemented state management solutions (Redux, Zustand, RTK Query) for better UI performance.",
              "Created customizable learning platforms for enterprise clients with dynamic UI adjustments.",
              "Integrated AI-powered features using OpenAI SDK and RAG for personalized learning experiences.",
            ],
          },
          {
            title:
              "Full Stack Developer | PT Praweda Sarana Informatika (Outsourced by PT Indocyber) (2018 - 2021)",
            responsibilities: [
              "Developed web applications using PHP (Laravel, CodeIgniter, CakePHP) and Vue.js.",
              "Built a Shipyard Project Management System handling end-to-end workflow.",
              "Maintained and improved a Trucking Management Application with GPS tracking and analytics.",
            ],
          },
          {
            title:
              "Full Stack Developer Trainee | PT Indocyber Global Technology (2018)",
            responsibilities: [
              "Trained in C#, Java, SQL Server, Java Spring, and MVC frameworks.",
              "Built a Library Management System as a final project.",
            ],
          },
        ]
      
      const skills = [
        {
          category: "Frontend",
          items: ["React.js", "Next.js", "Gatsby.js", "Vue.js"],
        },
        { category: "State Management", items: ["Redux", "RTK Query", "Zustand"] },
        {
          category: "Styling",
          items: ["Tailwind CSS", "Styled Components", "Sass", "Shadcn UI"],
        },
        {
          category: "API & Data Fetching",
          items: ["Axios", "React Query", "RTK Query", "SWR", "GraphQL"],
        },
        {
          category: "Backend",
          items: ["Node.js", "Laravel"],
        },
        {
          category: "Databases",
          items: ["PostgreSQL", "MySQL", "Firebase"],
        },
        {
          category: "Authentication",
          items: ["NextAuth.js", "OAuth", "JWT"],
        },
        {
          category: "Testing & Documentation",
          items: ["Jest", "Storybook", "React Testing Library"],
        },
        {
          category: "DevOps & Deployment",
          items: ["Vercel", "Netlify", "Docker", "CI/CD"],
        },
        { category: "Version Control", items: ["Git", "GitHub", "Git Flow"] },
        {
          category: "Tools & Utilities",
          items: ["ESLint", "Prettier", "Webpack", "Bun", "Vitest"],
        },
      ];
      
      const skill1 = skills.slice(0, 6);
      const skill2 = skills.slice(6);
      const skillStack = [skill1, skill2];

      const navigation = [
        {
            label : "About",
            link : "#about"
        },{
            label : "Experience",
            link : "#experience"
        },{
            label : "Contact",
            link : "#contact"
        }
      ]

      const social = [{
        logo : Github,
        link : "https://github/saepulmalik27"
      }, {
        logo : Linkedin,
        link : "https://linkedin.com/in/saepulalmalik"
      }, {
        logo : Twitter,
        link : "https://twitter.com/saepulalmalik"
      }]

      return {
        experience, skillStack, navigation, social
      }
}