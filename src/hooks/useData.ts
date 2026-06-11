import { Github, Linkedin, X } from "@/components/ui/brand-icons";

export const useData = () => {
    const experience = 
        [
          {
            title:
              "Frontend Web Engineer | PT Inspigo Inovasi Indonesia (2021 - Present)",
            responsibilities: [
              "Built and maintained high-performance web applications using Next.js and React, following standard Next.js workflows to ensure robustness and easy maintenance.",
              "Maintained and scaled an app-wide design system of components, ensuring UI consistency, accessibility, and high performance across all products.",
              "Collaborated seamlessly with cross-functional teams, including Product, Backend Developers, UI Designers, and QA teams, to deliver sophisticated designs and quality products.",
              "Implemented unit and integration tests using Jest and React Testing Library to deliver secure, scalable, and well-tested features.",
              "Challenged technical boundaries by exploring emerging technologies like Tauri & Rust to continuously expand the team's capabilities.",
            ],
            stacks : [
              'React.js', 'Next.js', 'TypeScript', 'Jest', 'Storybook', 'Tailwind CSS', 'Shadcn UI', 'Websocket'
            ]
          },
          {
            title:
              "Full-Stack Developer | PT Praweda Sarana Informatika (Outsourced by PT Indocyber) (2018 - 2021)",
            responsibilities: [
              "Developed maintainable, secure, and scalable web applications using PHP (Laravel) and Vue.js, coordinating across different layers of the infrastructure.",
              "Created and structured reusable UI components, documenting them with Storybook to foster team collaboration and speed up feature deployment.",
              "Used Git version control workflows (Git Flow) for code reviews, ensuring codebase integrity and alignment with team best practices.",
            ],
            stacks : ['PHP', 'Laravel', 'Vue.js', 'SQL Server', 'Git']
          },
          {
            title:
              "Full-Stack Developer Trainee | PT Indocyber Global Technology (2018)",
            responsibilities: [
              "Strengthened rock-solid fundamentals in JavaScript, TypeScript, C#, and Java Spring, demonstrating proficiency in OOP and database optimization.",
              "Built a Library Management System as a final project to showcase web interactivity and database design.",
            ],
            stacks : ['JavaScript', 'TypeScript', 'C#', 'Java', 'SQL Server']
          },
        ]
      
      const skills = [
        {
          category: "Frontend",
          items: ["Next.js", "React.js", "TypeScript", "ES6+ JavaScript"],
        },
        { category: "State Management", items: ["Zustand", "Redux Toolkit", "RTK Query"] },
        {
          category: "Styling & Design System",
          items: ["Tailwind CSS", "Shadcn UI", "Storybook", "Styled Components"],
        },
        {
          category: "API & Data Fetching",
          items: ["GraphQL", "REST APIs", "RTK Query", "React Query"],
        },
        {
          category: "Backend & Systems",
          items: ["Node.js", "Rust", "Laravel", "PHP"],
        },
        {
          category: "Desktop Apps",
          items: ["Tauri", "Electron"],
        },
        {
          category: "Databases",
          items: ["PostgreSQL", "MySQL", "Firebase"],
        },
        {
          category: "Testing Frameworks",
          items: ["Jest", "React Testing Library", "Vitest"],
        },
        {
          category: "DevOps & Deployment",
          items: ["Vercel", "Docker", "CI/CD (GitHub Actions)"],
        },
        { category: "Version Control & Tools", items: ["Git (Git Flow)", "GitHub", "ESLint", "Prettier"] },
      ];
      
      const skill1 = skills.slice(0, 5);
      const skill2 = skills.slice(5);
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
        logo : X,
        link : "https://twitter.com/saepulalmalik"
      }]

      return {
        experience, skillStack, navigation, social
      }
}