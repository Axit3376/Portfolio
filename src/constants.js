// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's


// Education Section Logo's
import ditLogo from './assets/education_logo/dit1.png';
import schoolLogo from './assets/education_logo/school.png';
import clgLogo from './assets/education_logo/clg.png';

// Project Section Logo's
import pokeLogo from './assets/work_logo/poke.png';
import taskLogo from './assets/work_logo/task.png';
import typeLogo from './assets/work_logo/type.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },,
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  
  export const education = [
    // {
    //   id: 0,
    //   img: glaLogo,
    //   school: "GLA University, Mathura",
    //   date: "Sept 2022 - July 2024",
    //   grade: "7.81 CGPA",
    //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    //   degree: "Master of Computer Applications - MCA",
    // },
    {
      id: 0,
      img: ditLogo,
      school: "DY Patil Institute of Technology",
      date: "Aug 2023 - June 2027",
      grade: "9.5 CGPA",
      desc: "I am doing my Bachelor's degree in Artificial Intelligence & Data Science (B.E) from DIT, Pune.",
      degree: "Bachelor of Engineering - BE (Artificial Intelligence & Data Science)",
    },
    {
      id: 1,
      img: clgLogo,
      school: "VVNP, Pune",
      date: "Apr 2022 - March 2023",
      grade: "80%",
      desc: "I completed my class 12 education from VVNP, under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Information Technology.",
      degree: "CBSE(XII) - PCM with Information Technology",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "SVVNS, Pune",
      date: "Apr 2019 - March 2020",
      grade: "92%",
      desc: "I completed my class 10 education from SVVNS, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "PokeQuiz",
      description:
      "A simple web-based Pokémon quiz game where users can guess the names of Pokémon and earn points for correct answers.",
      image: pokeLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Axit3376/PokeQuiz",
      webapp: "https://axit3376.github.io/PokeQuiz/",
    },
    {
      id: 1,
      title: "TaskPulse",
      description:
        "TaskPulse is a task management application designed to help users manage and track their tasks efficiently. It includes functionalities such as adding, viewing, editing, deleting tasks, and sending daily reminders via email for tasks that are due soon..",
      image: taskLogo,
      tags: ["Python", "SMTPLIB", "JSON", "Schedule"],
      github: "https://github.com/Axit3376/TaskPulse",
      // webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "TypeRush",
      description:
        "TypeRush is a fun and user-friendly desktop typing speed test application built with Python and Tkinter. It helps you improve your typing speed and accuracy in a visually appealing, responsive interface with real-time feedback and stats.",
      image: typeLogo,
      tags: ["Python", "Turtle"],
      github: "https://github.com/Axit3376/TypeRush",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },  
  ];  