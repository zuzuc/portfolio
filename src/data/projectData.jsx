import taskmanagerImg from "./../assets/images/taskmanager.png";
import mapstoriesImg from "./../assets/images/mapstories.JPG";
import pastalavistaImg from "./../assets/images/pastalavista.JPG";
import animalblogImg from "./../assets/images/animalblog.JPG";

const projectData = [
  {
    title: "Task Manager App",
    image: taskmanagerImg,
    alt: "Image of Task Manager App",
    url: "https://taskfocus.netlify.app/",
    type: "Full-Stack",
    techStacks: ["React", "HTML", "CSS", "Local Storage"],
    description:
      "A user-friendly and highly interactive task management application built using React. The app utilizes state management for smooth UI transitions and leverages localStorage to persist tasks across sessions, ensuring a seamless experience. Key features include task creation, categorization, and prioritization, helping users stay organized. Optimized for performance with minimal load times and high responsiveness, this tool is ideal for personal productivity and task tracking.",
  },
  {
    title: "MapStories",
    image: mapstoriesImg,
    alt: "Image of Map Stories",
    url: "https://map-stories.netlify.app/",
    type: "Full-Stack",
    techStacks: ["React", "Node.js", "MongoDB", "API"],
    description:
      "MapStories is a data visualization and storytelling platform created as a capstone project at WBS Coding School. Built with React, Node.js, and MongoDB, the app allows users to create and explore visual stories integrated with interactive maps. I was particularly involved in designing user-friendly forms and maps to ensure seamless content submission. The project leverages RESTful APIs to fetch and display dynamic data, providing a rich, engaging user experience for data-driven storytelling.",
  },
  {
    title: "Pasta Cookbook",
    image: pastalavistaImg,
    alt: "Image of Pasta La Vista",
    url: "https://hangingpulse.github.io/WBS-cookbook/",
    type: "Frontend",
    techStacks: ["HTML", "CSS", "Vanilla JavaScript"],
    description:
      "A responsive cookbook website dedicated to pasta recipes, built with HTML, CSS, and vanilla JavaScript. The project showcases my ability to create a functional user interface that adapts seamlessly to different screen sizes. Users can browse, filter, and explore various pasta recipes in an intuitive layout.",
  },
  {
    title: "Blog",
    image: animalblogImg,
    alt: "Image of Animal Blog",
    url: "https://mockodev.github.io/headlesscms/",
    type: "Backend",
    techStacks: ["React", "API", "Contentful", "SCSS"],
    description:
      "An animal-focused blog built using React, Contentful CMS, and SCSS. This project involved creating a dynamic, API-driven blog where users can view and interact with articles on various animals. I gained hands-on experience integrating the Contentful API to fetch and display blog posts and media content. Additionally, I implemented a custom carousel for images and videos, enhancing the overall visual experience. This project allowed me to deepen my understanding of back-end integration and content management.",
  },
];

export default projectData;
