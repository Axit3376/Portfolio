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
import pandasLogo from './assets/tech_logo/pandas.png'
import numpyLogo from './assets/tech_logo/numpy.png';
import matLogo from './assets/tech_logo/matplotlib.png';
import sciLogo from './assets/tech_logo/scikit.png';
import tensorLogo from './assets/tech_logo/tensort.png';


// Experience Section Logo's


// Education Section Logo's
import ditLogo from './assets/education_logo/dit1.png';
import schoolLogo from './assets/education_logo/school.png';
import clgLogo from './assets/education_logo/clg.png';

// Project Section Logo's
import pokeLogo from './assets/work_logo/poke.png';
import taskLogo from './assets/work_logo/task.png';
import typeLogo from './assets/work_logo/type.png';
import ytLogo from './assets/work_logo/Youtube.png';
import heartLogo from './assets/work_logo/heart.png';
import calLogo from './assets/work_logo/cal.png';
import movieLogo from './assets/work_logo/movie.png'

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
    ],
  },
  {
    title: 'Libraries',
    skills: [
      { name: 'Pandas', logo: pandasLogo },
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Matplotlib', logo: matLogo },
      { name: 'Scikit-Learn', logo: sciLogo },
      { name: 'Tensor-Flow', logo: tensorLogo },
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
      grade: "9.32 CGPA",
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
      title: "California Housing Price Predictor",
      description:
        "A jupyter notebook that predicts California housing prices based on user-input features using a trained machine learning model. Includes data preprocessing, model inference, and a clean interactive interface.",
      image:calLogo,
      tags: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
      github: "https://github.com/Axit3376/California-Housing-Price-Predictor",
    },
     {
      id: 1,
      title: "Heart Disease Predictor",
      description:
        "A jupyter notebook that predicts California housing prices based on user-input features using a trained machine learning model. Includes data preprocessing, model inference, and a clean interactive interface.",
      image: heartLogo,
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
      github: "https://github.com/Axit3376/Heart-Disease-Prediction",
    },
    {
      id: 2,
      title: "PokeQuiz",
      description:
      "A simple web-based Pokémon quiz game where users can guess the names of Pokémon and earn points for correct answers.",
      image: pokeLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Axit3376/PokeQuiz",
      webapp: "https://axit3376.github.io/PokeQuiz/",
    },
    {
      id: 3,
      title: "TaskPulse",
      description:
        "TaskPulse is a task management application designed to help users manage and track their tasks efficiently. It includes functionalities such as adding, viewing, editing, deleting tasks, and sending daily reminders via email for tasks that are due soon..",
      image: taskLogo,
      tags: ["Python", "SMTPLIB", "JSON", "Schedule"],
      github: "https://github.com/Axit3376/TaskPulse",
      // webapp: "https://csprep.netlify.app/",
    },
    {
      id: 4,
      title: "TypeRush",
      description:
        "TypeRush is a fun and user-friendly desktop typing speed test application built with Python and Tkinter. It helps you improve your typing speed and accuracy in a visually appealing, responsive interface with real-time feedback and stats.",
      image: typeLogo,
      tags: ["Python", "Turtle"],
      github: "https://github.com/Axit3376/TypeRush",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },  
    {
      id: 5,
      title: "The Movie House",
      description:
        "A lightweight movie search app where u can search for any movies you want!",
      image:movieLogo,
      tags: ["React", "HTML", "TailwindCSS","JavaScript", "API"],
      github: "https://github.com/Axit3376/The-Movie-House/tree/main",
      webapp: "https://axit3376.github.io/The-Movie-House/",
    },  
  ];  