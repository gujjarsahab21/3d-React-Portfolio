import {innobyte, technohacks } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    cpp,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    vscode,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",

    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
        
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {   
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: vscode,
        name: "Visual Studio Code Editor",
        type: "IDE",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "InnoByte Services",
        icon: innobyte,
        iconBg: "#accbe1",
        date: "Jan 2024 - March 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Working on developing new projects and improving existing ones, collaborating with other developers and ensuring responsiveness and accessibility. ",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "TechnoHacks Edutech",
        icon: technohacks,
        iconBg: "#fbc3bc",
        date: "Oct 2023 - Dec 2023",
        points: [
            "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/gujjarsahab21',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/harsh-gurjar-056b9a269/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Ninja Blogs: A Blogging App',
        description: ' Ninja Blog is a feature-rich React blogging app built with React.js (Vite). It boasts a real-time editor, React Router for navigation, React Redux Toolkit for state management, and stylish design with Tailwind CSS. Offering a seamless and enjoyable blogging experience, it is a powerfull tool for content creators',
        link: 'https://ninja-blog-omega.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Placement Management System',
        description: ' The Placement Management System is a web application designed for the training and placement department of our college. It features separate login pages for administrators, coordinators, and students. Administrators have the ability to post notices.'
        ,
        link: 'https://placement-cell-app.onrender.com/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Codepen Clone',
        description: 'Created a CodePen clone, providing a platform for developers to showcase and share HTML, CSS, and JavaScript code snippets. Built with React.js and Node.js, the application offers features like code editing, live preview, and community engagement, fostering collaboration and creativity within the developer community.',
        link: 'https://codepen-clone-beige-five.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Simon Game',
        description: 'Simon Game is an entertaining and challenging application inspired by the classic electronic game. Featuring four colored buttons with unique sounds, players must replicate sequences to test memory and reflexes. With intuitive gameplay and captivating visuals, it offers an enjoyable experience for players of all ages.',
        link: 'https://simon-game-sooty.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Pinterest Clone',
        description: ' Developed a full-stack replica of Pinterest, allowing users to save and discover recipes, home decor, style inspiration, and motivational content. Built with React.js and Node.js, the application offers features like personalized boards, social interactions, and seamless cross-device compatibility'
        ,
        link: 'https://github.com/gujjarsahab21/Pinterest-Clone',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Comment Analyzer',
        description: 'Developed an AI-powered sentiment analysis application using machine learning and natural language processing techniques. Effectively categorizes user comments into positive or negative sentiments, enabling businesses to gain valuable insights from customer feedback.',
        link: 'https://github.com/gujjarsahab21/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green', 
        name: 'R15 Family',
        description: 'R15 family is a dynamic website featuring interactive animations that engage users. With engaging hover effects that respond to user interaction, it provides visual feedback, enhancing the user experience and creating an immersive browsing environment.'
        ,
        link: 'https://interactive-animating-website.vercel.app/', 
    },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: '',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
    
];