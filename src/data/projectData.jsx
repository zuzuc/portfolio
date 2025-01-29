import taskmanagerImg from "./../assets/images/taskmanager.png";
import mapstoriesImg from "./../assets/images/mapstories.JPG";
import pastalavistaImg from "./../assets/images/pastalavista.JPG"
import animalblogImg from "./../assets/images/animalblog.JPG"

const projectData = [
    {
        title: 'Task Manager App',
        image: taskmanagerImg,
        alt: 'Image of Task Manager App',
        url: 'https://taskfocus.netlify.app/',
        type: 'Full-Stack',
        techStacks: [
            'HTML',
            'CSS',
            'React',
            'Local Storage',
        ],
        description:
            'A simple yet functional task management application built with React. The app is state-managed and persists data using localStorage. It is lightweight, interactive, and great for personal productivity!'
    },
    {
        title: 'MapStories',
        image: mapstoriesImg,
        alt: 'Image of Map Stories',
        url: 'https://map-stories.netlify.app/',
        type: 'Full-Stack',
        techStacks: [
            'React',
            'Node.js',
            'MongoDB',
            'API'
        ],
        description:
            'Platform dedicated to data-visualisation & story-telling'
    },
    {
        title: 'Pasta Cookbook',
        image: pastalavistaImg,
        alt: 'Image of Pasta La Vista',
        url: 'https://hangingpulse.github.io/WBS-cookbook/',
        type: 'Frontend',
        techStacks: [
            'HTML',
            'CSS',
            'Vanilla JavaScript'
        ],
        description:
            'Cookbook website for pasta lovers'
       
    }, 
    {
        title: 'Blog',
        image: animalblogImg,
        alt: 'Image of Animal Blog',
        url: 'https://mockodev.github.io/headlesscms/',
        type: 'Backend',
        techStacks: [
            'React',
            'API',
            'Contentful',
            'SCSS'
        ],
        description:
            'Blog                                                   '
       
    }, 

]

export default projectData;