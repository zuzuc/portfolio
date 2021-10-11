import mapstoriesImg from "./../assets/mapstories.JPG";
import pastalavistaImg from "./../assets/pastalavista.JPG"
import animalblogImg from "./../assets/animalblog.JPG"

const projectData = [
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