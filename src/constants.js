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
import postmanLogo from './assets/tech_logo/postman.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import fastAPILogo from './assets/tech_logo/fastapi.png';
import javaLogo from './assets/tech_logo/java.png';
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
import calLogo from './assets/work_logo/cal.png';
import movieLogo from './assets/work_logo/movie.png';
import dataLensLogo from './assets/work_logo/datalens.png';
import customerChurnLogo from './assets/work_logo/customerchurn.png';

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
      { name: 'FastAPI', logo: fastAPILogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
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
      { name: 'Postman', logo: postmanLogo },
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
      title: "DataLens",
      description:
        "A comprehensive data visualization and analysis platform that transforms complex datasets into intuitive, interactive visualizations. Features real-time data processing, customizable dashboards, and advanced analytics capabilities.",
      image: dataLensLogo,
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Plotly", "FastAPI", "HTML", "CSS"],
      github: "https://github.com/Axit3376/Data-Lens",
      webapp: "https://datalens-1vzm.onrender.com/"
    },
    {
      id: 1,
      title: "Customer Churn Prediction",
      description:
        "A machine learning model that predicts customer churn using historical customer data and behavioral patterns. Includes data preprocessing, feature engineering, model evaluation, and actionable insights for retention strategies.",
      image: customerChurnLogo,
      tags: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Machine Learning"],
      github: "https://github.com/Axit3376/Telecom-Churn",
    },
    {
      id: 2,
      title: "California Housing Price Predictor",
      description:
        "A jupyter notebook that predicts California housing prices based on user-input features using a trained machine learning model. Includes data preprocessing, model inference, and a clean interactive interface.",
      image: calLogo,
      tags: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
      github: "https://github.com/Axit3376/California-Housing-Price-Predictor",
    },
    {
      id: 3,
      title: "PokeQuiz",
      description:
      "A simple web-based Pokémon quiz game where users can guess the names of Pokémon and earn points for correct answers.",
      image: pokeLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Axit3376/PokeQuiz",
      webapp: "https://axit3376.github.io/PokeQuiz/",
    },
    {
      id: 4,
      title: "The Movie House",
      description:
        "A lightweight movie search app where u can search for any movies you want!",
      image: movieLogo,
      tags: ["React", "HTML", "TailwindCSS","JavaScript", "API"],
      github: "https://github.com/Axit3376/The-Movie-House/tree/main",
      webapp: "https://axit3376.github.io/The-Movie-House/",
    },  
  ];  