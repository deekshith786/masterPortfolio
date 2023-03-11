/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Deekshith's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Deekshith Portfolio",
    type: "website",
    url: "/",
  },
};

//Home Page
const greeting = {
  title: "Deekshith Madhunala",
  logo_name: "DeekshithMadhunala",
  nickname: "dee",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/deekshith786",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deekshith-m-27b4b8169/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:deekshithchinna2@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing robust, scalable, modular Micro services using GraphQL, Integrating third-party tools and components.",
        "⚡ Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement.",
        "⚡ Experience of working with Cafienne, a low code platform for designing and automating tasks for application-easy.",
      ],
      softwareSkills: [
        {
          skillName: "Springboot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-dark",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "skill-icons:graphql-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Fontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React.",
        "⚡ Developing web applications using various CSS libraries Material UI, Bootstrap.",
        "⚡ Integrating application with backend in Spring Boot, firebase.",
        "⚡ Hosting applications on platforms sucha as AWS, Heroku, firebase.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "skill-icons:heroku",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/dee1234",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@deekshithchinna2",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/dixit2",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/deekshith2",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "CMR College Of Engineering and Technology",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "cmr_cet.png",
      alt_name: "CMR college",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, etc.",
        "⚡ Apart from this, I have learned technologies like HTML, JavaScript, React and implemented basic web pages.",
        "⚡ I was member of Coding club, for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://cmrcet.ac.in/",
    },
    {
      title: "Sri Chaitanya Junior college",
      subtitle: "Intermediate",
      logo_path: "intermediate.png",
      alt_name: "Intermediate",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ I have taken Maths, Physics and Chemistry (MPC) as my main course.",
        "⚡ Apart from this, I have also prepared from the competitive exams like EAMCET, JEE MAINS and ADVANCE."
      ],
      website_link: "https://srichaitanya.net/",
    },
    {
      title: "NSKK High School",
      subtitle: "SSC",
      logo_path: "school.png",
      alt_name: "Intermediate",
      duration: "2015",
      descriptions: [
        "⚡ Basic SSC graduation."
      ],
      website_link: "http://nskk.in/nskk-high-school-ferozguda/",
    },
  ],
};

const certifications = {
  certifications: []};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with differnt clients as Backend Developer, Frontend Developer and also worked with some well established companies. Tech enthusiast, never stop learning!, always keeps up with the latest tech. I love organising events and that is why I am also involved with communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "SoftWare Engineer",
          company: "CoMakeIT",
          company_url: "https://www.comakeit.com/",
          logo_path: "company.jpeg",
          duration: "Present",
          location: "Hyderabad, Telangana",
          description:
            "I am working development of robust, scalable, modular Micro services using GraphQL, integrating third-party tools and components into application. Revised, modularized and updated old code bases to modern development standards, reducing operating costs, and improving functionality.",
          color: "#0879bf",
        },
        {
          title: "Associate SoftWare Engineer",
          company: "CoMakeIT",
          company_url: "https://www.comakeit.com/",
          logo_path: "company.jpeg",
          duration: "Aug 2021 - Sep 2022",
          location: "Hyderabad, Telangana",
          description:
            "I have created application Uls via emerging front-end technologies (React JS, Angular Js). Developed back-end components to connect applications with web services (Spring Boot, Graph QL). Configured and deployed existing and future REST APi's integrating with third-party APi's.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Engineer Trainee",
          company: "CoMakeIT",
          company_url: "https://www.comakeit.com/",
          logo_path: "company.jpeg",
          duration: "Dec 2020 - JULY 2021",
          location: "Hyderabad, Telangana",
          description:
            "Explored Spring Boot framework and assisted in developing Api's, resoved problems, improved operations for application and provided exceptional service. Tested cafienne models, assisted in development of the UI for caflenne Using React. Implemented various workflows using CMMN specifications.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Solid Micro Service API's  and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Bowenpally, Secundrabad, Hyderabad-500011",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/HLuvNwgpRCAAHJBv5",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
