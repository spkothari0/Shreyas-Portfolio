/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shreyas's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shreyas Kothari Portfolio",
    type: "website",
    url: "https://spkothari0.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Shreyas Kothari",
  logo_name: "ShreyasKothari",
  nickname: "Shrey",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1YPD4wugu7bSMyvMK-F4Q59w11C-07_-U/view?usp=sharing",
  portfolio_repository: "https://github.com/spkothari0/Shreyas-Portfolio",
  githubProfile: "https://github.com/spkothari0",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/spkothari0",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shreyas-kothari/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kothari.shr@northeastern.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shrey0503/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building dynamic, responsive froen-end with React-Redux and Angular, including SPAs & MPAs with state management, routing, PWAs, and component-based architecture",
        "⚡ Adept at building robust back-end services with Spring Boot and .NET Core, including RESTful APIs, microservices, and server-side logic",
        "⚡ Delivered full stack projects from concept to deployment, integrating databases, cloud services, and third-party APIs",
        "⚡ Experience with version control systems like Git, CI/CD pipelines and various development tools",
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6FB33F",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "IntelliJ IDEA",
          fontAwesomeClassname: "devicon:intellij",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "DotNet Core",
          fontAwesomeClassname: "devicon:dotnetcore",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "SPARQL",
          fontAwesomeClassname: "vscode-icons:file-type-sparql",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "Visual Studio 2022",
          fontAwesomeClassname: "devicon:visualstudio",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Express JS",
          fontAwesomeClassname: "skill-icons:expressjs-light",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "devicon:vscode",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS S3",
          fontAwesomeClassname: "logos:aws-s3",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS RDS",
          fontAwesomeClassname: "logos:aws-rds",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS EC2",
          fontAwesomeClassname: "logos:aws-ec2",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in designing, deploying, integrting and managing cloud infrastructure on AWS and Azure, ensuring high availability, scalability, and security",
        "⚡ Implemented CI/CD on AWS and Azure for automated testing and deployments, reducing manual errors and increasing efficiency",
        "⚡ Adept at implementing cloud security best practices, including identity and access management (IAM), network security, data encryption",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/spkothari0/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/spkothari0",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ramdeobaba College of Engineering and Management",
      subtitle: "B.E in Computer Science and Engineering",
      logo_path: "rbu.gif",
      alt_name: "RBU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic computer science subjects like DS, Algorithms, DBMS, OS, OOD, AI etc.",
        "⚡ Apart from this, I have done courses on Bash Scripting, Machine Learning and Backend Development.",
        "⚡ I was selected for ACM India Chapter and have also participated in various hackathons and coding competitions. Our team was finalist among top 7 team in ACM India Solution Contest.",
      ],
      website_link: "https://www.rknec.edu/",
    },
    {
      title: "Northeastern University Boston",
      subtitle: "M.S. in Computer Software Engineering",
      logo_path: "neu.png",
      alt_name: "NEU",
      duration: "2024 - Exp 2025",
      descriptions: [
        "⚡ I have taken varity of courses related to Software Development which correspond to Application Engineering and Model Development, Web Design and Development, Program Structure and Algorithms",
        "⚡ I have participated in various hackathons, coding competitions and conferences held at MIT and at NEU.",
        "⚡ During my time at university, I was also associated with multimedia department and clubs. As part of it, I have worked in some events, and participated in art and such extracurricular activities.",
      ],
      website_link: "https://www.northeastern.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Developer Associate",
      subtitle: "- AWS",
      logo_path: "aws-developer.png",
      certificate_link:
        "https://www.credly.com/badges/60d2a99d-7e38-4c60-b01a-6d6a6f6d89f9/public_url",
      alt_name: "Developer Associate",
      color_code: "#8C151599",
    },
    {
      title: "AWS Solutions Architect Associate",
      subtitle: "- AWS",
      logo_path: "aws-solution-arch.png",
      certificate_link:
        "https://www.credly.com/badges/1fa37523-59f0-4271-9a42-dc540246c05a/public_url",
      alt_name: "Solutions Architect Associate",
      color_code: "#007FFF",
    },
    {
      title: "Certified Problem Solver",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.webp",
      certificate_link:
        "https://www.hackerrank.com/certificates/c8441f3186ae",
      alt_name: "Problem Solving",
      color_code: "#0C9D5899",
    },
    {
      title: "Certified Java Developer",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.webp",
      certificate_link:
        "https://www.hackerrank.com/certificates/24557500687e",
      alt_name: "Java",
      color_code: "#87CEEB",
    },
    {
      title: "Accenture Celebrate Excellence Award(ACE)",
      subtitle: "- Accenture",
      logo_path: "ace.jpg",
      certificate_link:
        "",
      alt_name: "ACE Award",
      color_code: "#A100FF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "As a seasoned Full Stack Developer with a strong foundation in both front-end and back-end technologies, I have contributed significantly to multiple high-impact projects at Accenture India. Over the years, I have honed my skills in designing, developing, and deploying sophisticated web applications and services. My expertise spans across various technologies, frameworks, and tools, ensuring efficient and maintainable code, seamless user experiences, and optimized application performance.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Fulltime Work",
      work: true,
      experiences: [
        [
          {
            title: "Senior Full Stack Developer",
            company: "Accenture India",
            company_url: "https://www.accenture.com/in-en",
            logo_path: "accenture.jpg",
            duration: "Dec 2022 - Dec 2023",
            location: "Bangalore, India",
            description:
              "As a Senior Full Stack Developer at Accenture, I spearheaded the design, development, and deployment of sophisticated web applications and services. My role encompassed significant responsibilities across both front-end and back-end development, driving technical excellence and innovation. I proactively introduced new technologies and frameworks, specifically SPARQL and Stardog, which proved instrumental for the project. These technologies enabled users to visualize data in a graphical format, perform various operations on the graph, and conduct data-derived analyses to make informed decisions. For this initiative, I was honored with the Accenture Celebrate Excellence Award (ACE).",
            color: "#000000",
            jobResponsibility: {
              title: "Key Responsibilities and Achievements",
              responsibilities: [
                {
                  name: "API Development and Design",
                  data: [
                    "Designed and developed .NET Web APIs, Windows services for background tasks, and NuGet packages for reuse across projects, ensuring efficient and maintainable code.",
                    "Deployed services on Azure pipelines with log monitoring to promptly identify and resolve software bugs.",
                    "Developed various .NET APIs utilizing SPARQL queries to manage dynamic graph structures, enabling operations such as node removal, node expansion, and filtering irrelevant nodes.",
                    "Created a dynamic Knowledge Graph UI and backend using Angular, Stardog framework, and ASP.NET Web APIs, allowing seamless graphical visualization of data fetched from APIs, adaptable to new entities without code changes."
                  ]
                },
                {
                  name: "Technical Initiatives",
                  data: [
                    "Pioneered the integration of Stardog into our project, mapping SQL queries to SPARQL queries, resulting in a performance improvement of up to 10%.",
                    "Developed database and ontology models in Stardog for visual data mapping, aiding in informed, data-driven decisions crucial to the project's success.",
                    "Engineered efficient communication between multiple APIs, optimizing data transformation processes.",
                    "Collaborated with cross-functional teams to resolve bugs, optimize existing APIs, and deliver high-quality solutions, enhancing application performance and reliability.",
                    "Here is a link for the stardog to know more details about the Knowledge Graph: https://www.stardog.com/"
                  ]
                },
                {
                  name: "Project Architecture and Performance Optimization",
                  data: [
                    "Orchestrated the .NET project architecture, integrating middleware for multilingual support and implementing API caching with Redis, enhancing application performance by up to 35%.",
                    "Delivered a seamless user interface for clients, ensuring high performance and reliability."
                  ]
                },
                {
                  name: "Front-End Development",
                  data: [
                    "Developed and maintained dynamic web applications using Angular, leading to a 20% increase in user engagement through a streamlined and responsive front-end experience.",
                    "Created a customized Knowledge Graph in the front end replicating the graph on the Stardog website, with movable and editable nodes, improving user engagement by 20%."
                  ]
                }
              ]
            },
            technologyUsed: {
              title: "Technology and Tools Used",
              technologies: [
                {
                  name: "Frontend Development",
                  data: [
                    "Angular", "TypeScript", "HTML5", "CSS3", "JavaScript"
                  ]
                },
                {
                  name: "Backend Development & Databases",
                  data: [
                    "ASP.NET Web API", "Windows Services", "NuGet Package", "SPARQL", "Microsoft SQL Server", "RESTful APIs"
                  ]
                },
                {
                  name: "Tools and Platforms",
                  data: [
                    "Stardog (for SPARQL queries and ontology model)", "Redis", "Git", "Azure", "Visual Studio 2022", "VS Code", "Postman",
                  ]
                }
              ]
            }
          },
          {
            title: "Associate Full Stack Developer",
            company: "Accenture India",
            company_url: "https://www.accenture.com/in-en",
            logo_path: "accenture.jpg",
            duration: "Dec 2020 - Dec 2022",
            location: "Bangalore, India",
            description:
              "As an Associate Full Stack Developer at Accenture, I played a critical role in the design, development, and maintenance of web applications. My responsibilities covered both front-end and back-end development, ensuring seamless integration and high-quality delivery. I also completed 2 certifications in AWS Developer Associate and AWS Solutions Architect Associate.",
            color: "#000000",
            jobResponsibility: {
              title: "Key Responsibilities and Achievements",
              responsibilities: [
                {
                  name: "Training and Frontend Development",
                  data: [
                    "Completed extensive training on Spring Boot, Spring MVC, and Spring Security, developing a thorough understanding of n-tier architecture and microservices",
                    "Developed dynamic, responsive UI using Angular and Typescript using predesigned components provided by the UI/UX team, creating cohesive and visually appealing web pages",
                    "Ensured high code quality by writing unit test cases for Angular components, contributing to the overall reliability of the application"
                  ]
                },
                {
                  name: "Backend Development and team collaboration",
                  data: [
                    "Took the initiative to expand into back-end development, creating and maintaining RESTful APIs using ASP.NET Web APIs within an n-tier architecture",
                    "Implemented CRUD operations with Entity Framework Core on PostgreSQL and Microsoft SQL databases, ensuring seamless data management and retrieval",
                    "Engineered efficient communication between multiple APIs optimizing data transformation processes",
                    "Worked closely with cross-functional teams to resolve bugs, optimize existing APIs, and deliver high-quality solutions, enhancing application performance and reliability"
                  ]
                },
                {
                  name: "Continuous Learning and Certification",
                  data: [
                    "Proactively pursued AWS training through ACloudGuru, earning two AWS certifications: Developer Associate and Solutions Architect Associate",
                    "Recognized and appreciated by management for dedication to continuous learning, mentoring the newly onboarded juinors and resolving their queries and achieving AWS certifications, contributing to personal growth and team capability"
                  ]
                }
              ]
            },
            technologyUsed: {
              title: "Technology and Tools Used",
              technologies: [
                {
                  name: "Frontend Development",
                  data: [
                    "Angular", "TypeScript", "HTML5", "CSS3", "JavaScript"
                  ]
                },
                {
                  name: "Backend Development",
                  data: [
                    "ASP.NET Web API", "Spring Boot", "Entity Framework Core", "PostgreSQL", "Microsoft SQL Server", "RESTful APIs"
                  ]
                },
                {
                  name: "Tools and Platforms",
                  data: [
                    "Git", "Azure", "Visual Studio 2022", "VS Code", "Postman",
                  ]
                }
              ]
            }
          }
        ],
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     // {
    //     //   title: "Machine Learning Intern",
    //     //   company: "TikTok Inc.",
    //     //   company_url: "https://www.tiktok.com/en/",
    //     //   logo_path: "tiktok_logo.png",
    //     //   duration: "May 2022 - Aug 2022",
    //     //   location: "San Francisco, USA",
    //     //   description:
    //     //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //     //   color: "#000000",
    //     // },

    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     // {
    //     //   title: "Google Explore ML Facilitator",
    //     //   company: "Google",
    //     //   company_url: "https://about.google/",
    //     //   logo_path: "google_logo.png",
    //     //   duration: "June 2019 - April 2020",
    //     //   location: "Hyderabad, Telangana",
    //     //   description:
    //     //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //     //   color: "#4285F4",
    //     // },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create dynamic software development projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ShreyasProfessional.jpg",
    description:
      "👋I'm easily reachable on various social platforms and typically respond within 2-3 working days.📧For swift communication, reach out via email or LinkedIn. 🎯Currently seeking internships or co-op roles, particularly in Software Development💻 and Cloud Computing☁️. Looking forward to connecting with you !!😊",
  },

  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Boston, MA, USA - 02120",
    locality: "Boston",
    country: "USA",
    region: "Massachusetts",
    postalCode: "02120",
    streetAddress: "360 Huntington Ave",
    avatar_image_path: "address_image.svg",
    location_map_link: "360 Huntington Ave, Boston, MA 02115",
  },
  phoneSection: {
    title: "Contact Number:",
    subtitle: "+1 857-544-5983",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
