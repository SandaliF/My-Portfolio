
import {faHome, faEnvelope, faUserGraduate, faFolder} from '@fortawesome/free-solid-svg-icons'
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,      
        path: '/'
    },
    {
        id: 2,
        name: `About`,
        icon : faUserGraduate,
        path: '/About'
    }, 
    {
        id: 3,
        name: 'Projects',
        icon : faFolder,
        path: '/projects'
    },
    {
        id: 4,
        name: 'Contact',
        icon : faEnvelope,
        path: '/Contact'
    },
];



export const experience = [
    {
        id: 1,
        no: '2+',
        title:'Years Experience'
    },
    {
        id: 2,
        no: '10+',
        title:'Complete Projects'
    },
    {
        id: 3,
        no: '3+',
        title:'Happy Clients'
    },
];


import image1 from '../../src/assets/python.png'
import image2 from '../../src/assets/react.png'
import image3 from '../../src/assets/java.png'
import image4 from '../../src/assets/javascript.png'
import image5 from '../../src/assets/c++.png'
import image6 from '../../src/assets/html.png'
import image7 from '../../src/assets/mysql.png'
//import image8 from '../../src/assets/css.png'

export const tools = [
    {
        id: 1,
        img: image1,
    },
    {
        id: 2,
        img: image2,
    },
    {
        id: 3,
        img: image3,
    },
    {
        id: 4,
        img: image4,
    },
    {
        id: 5,
        img: image5,
    },
    {
        id: 6,
        img: image6,
    },
    {
        id: 7,
        img: image7,
    },
    // {
    //     id: 8,
    //     img: image8,
    // },
];


import {faCodeBranch, faCode,faCodeCompare,} from '@fortawesome/free-solid-svg-icons'
export const education = [
    {
        id: 1,
        // icon: faCode,
        name:'University of Moratuwa, Sri Lanka (2022 - Present)',
        des:'BSc Engineering (Hons) | Computer Science and  Engineering (Undergraduate)'
    },
    {
        id: 2,
        // icon: faCodeBranch,
        name:'De Mazenod College - Kandana (2017-2020)',
        des:'G.C.E. A/L Examination 2020 - Physical Science Stream - 3As'
    },
    {
        id: 3,
        // icon: faCodeCompare,
        name:'St. Joseph’s College - Colombo 10, Negombo Branch (2006 - 2016)',
        des:'G.C.E. O/L Examination 2016 - 9A’s including Mathematics: A | English: A | IT: A'
    },
    
];




import protfoliImg1 from '../../src/assets/project1.jpeg'
import protfoliImg2 from '../../src/assets/project2.jpeg'
import protfoliImg3 from '../../src/assets/project3.jpeg'
import protfoliImg4 from '../../src/assets/project4.jpg'
import protfoliImg5 from '../../src/assets/project5.jpeg'

export const projects = [
    {
        id: 1,
        img: protfoliImg1,
        name: 'Hotel and Restaurant Management System',
        des: 'This is the third year Software Engineering Project to manage the functions of a Hotel and Restaurant Management System for a set of hotels with separate interfaces for customers and administrators. Customers can browse hotels and select rooms based on their preferences, while admins can manage hotel and room listings (add, edit, remove). ',
        // github:'#',
    },
    {
        id: 1,
        img: protfoliImg2,
        name: 'Human Resource Management System',
        des: 'This is the second year DBMS project designed as a software solution to specifically satisfy the needs of a HR Department of a multinational company.',
        // github:'#',
    },
    {
        id: 1,
        img: protfoliImg3,
        name: 'RPAL Interpreter',
        des: 'An interpreter for the functional programming language. RPAL consists of a lexical analyzer, parser and a CSE machine. The interpreter can execute a given RPAL program by constructing the abstract syntax tree, standardizing the AST and evaluating the program to get the output.',
        // github:'#',
    },
    {
        id: 1,
        img: protfoliImg4,
        name: 'Quiz App',
        des: "A personal mini project created for allowing users to take interactive quizzes. The app features multiple-choice questions, scoring functionality, and a user-friendly interface, enhancing the learning experience through engaging content."

    },
    {
        id: 1,
        img: protfoliImg5,
        name: 'Nano Processor Project',
        des: 'This is the Semester 2 Computer organization and digital design project to design a 4-bit nano processor for doing addition, subtraction, and negation. '
    }
    
];



import avatar1 from '../../src/assets/avatar1.png'
import avatar2 from '../../src/assets/avatar2.png'
import avatar3 from '../../src/assets/avatar3.png'
import avatar4 from '../../src/assets/avatar4.png'

export const testimonials = [
    {
        id: 1,
        img: avatar1,
        name: 'Dong Lee',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
    {
        id: 2,
        img: avatar2,
        name: 'Mohammed Habib',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
    {
        id: 3,
        img: avatar3,
        name: 'Jhon Alas',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
    {
        id: 4,
        img: avatar4,
        name: 'Irfan Nazir',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
];
