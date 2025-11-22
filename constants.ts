import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Pulla Saikiran",
  title: "Full-Stack Developer",
  contact: {
    email: "saikiranp816@gmail.com",
    phone: "+91 9515703265",
    location: "Hyderabad, Telangana, India",
    github: "https://github.com/PullaSaiKiran", 
    linkedin: "https://www.linkedin.com/in/saikiran-pulla-72b423218/", 
  },
  summary: "Results-driven Full-Stack Developer with a strong foundation in Python, AngularJS, and machine learning. Experienced in developing scalable web applications, predictive models, and AI-driven solutions. Proficient in building interactive front-end applications, robust back-end services, and efficient databases. Adept at problem-solving, teamwork, and delivering high-quality, data-driven applications.",
  skills: {
    languages: ["Python"],
    web: ["JavaScript", "CSS", "Angular", "HTML"],
    cloud: ["AWS", "Docker"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git", "VS Code"],
    spoken: ["Telugu", "English", "Hindi"]
  },
  experience: [
    {
      role: "Machine Learning Intern",
      company: "ACADEMOR",
      duration: "Remote",
      points: [
        "Developed and supported ML pipelines including data preprocessing, transformation, and validation workflows.",
        "Contributed to automation of model evaluation tasks and maintenance of project documentation.",
        "Gained practical exposure to secure data handling and collaborative ML development."
      ]
    }
  ],
  projects: [
    {
      title: "AI-Based Fitness Plan Generator",
      description: [
        "Built an AI-based application that generates personalized fitness plans based on user profiles and fitness goals.",
        "Utilized machine learning algorithms to analyze user data and recommend tailored exercise and diet plans."
      ],
      tech: ["LLM", "RAG", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop" // Fitness/Gym image
    },
    {
      title: "Crop Selection, Fertilizer Advice And Disease Detection",
      description: [
        "Developed a deep learning model to assist farmers with crop selection, fertilizer recommendations, and disease detection.",
        "Integrated image recognition techniques to diagnose plant diseases with high accuracy."
      ],
      tech: ["Deep Learning", "Image Recognition"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop" // Agriculture image
    },
    {
      title: "Loan Prediction",
      description: [
        "Developed using Machine Learning.",
        "It provides a suggestion while approving a loan to the customers."
      ],
      tech: ["Machine Learning", "Predictive Modeling"],
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1470&auto=format&fit=crop" // Finance/Money image
    },
    {
      title: "Ecommerce Website Development",
      description: [
        "Developed a fully functional e-commerce website with user authentication and payment gateway integration.",
        "Implemented a responsive UI using AngularJS and back-end services with Flask."
      ],
      tech: ["AngularJS", "Flask", "Python"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop" // Reliable Shopping/Payment image
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology: Artificial Intelligence and Machine Learning",
      institution: "Anurag University",
      year: "2021-2025",
      score: "CGPA: 8.02/10",
      relevantCoursework: "Software Engineering, DBMS, Distributed Systems, AI/ML, Cybersecurity"
    },
    {
      degree: "Intermediate: MPC",
      institution: "Sri Chaitanya Junior College",
      year: "2019-2021",
      score: "Percentage: 88%"
    },
    {
      degree: "Secondary Education",
      institution: "Serenity Model High School",
      year: "2018-2019",
      score: "CGPA: 9.2/10"
    }
  ],
  certifications: [
    "AWS - Cloud Foundations, Machine Learning Foundations",
    "IBM - Machine Learning with Python, Data Visualization with Python",
    "CISCO - Introduction to Cybersecurity, Cybersecurity Essentials, Networking Essentials, PCAP, IOT foundations, Network Addressing and Basic Troubleshooting, CCNA",
    "INFOSYS - Fundamentals of Information Security, Design Thinking"
  ]
};