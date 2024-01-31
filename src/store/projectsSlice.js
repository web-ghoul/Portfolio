import { createSlice } from "@reduxjs/toolkit"
import alCazarImg from "../static/images/alcazar.png"
import blogImg from "../static/images/blog_project.png"
import cashierImg from "../static/images/cashier_project.png"
import codingForEveryone from "../static/images/coding_for_everyone.png"
import Dagagino from "../static/images/dagagino.png"
import jquery1 from "../static/images/jquery1.png"
import jquery2 from "../static/images/jquery2.png"
import jquery3 from "../static/images/jquery3.png"
import newsImg from "../static/images/news_project.png"
import toDo from "../static/images/todo_app.png"
import tournamentImg from "../static/images/tournament_project.png"
import webGhoulCalcImg from "../static/images/webGhoulCalcImg.jpeg"

const initialState = {
    projects: [
        {
            "img": Dagagino,
            "title": "Dagagino",
            "role": "Frontend Developer",
            "description": "Application to Manage Products of Sellers for Customers. (Freelance)",
            "links": {
                "preview": "https://dagagino.com.om/"
            },
            "skills": ["Next", "Material UI", "Redux Toolkit"],
        },
        {
            "img": alCazarImg,
            "title": "AlCazar",
            "role": "MERN Stack Developer",
            "description": "Application to Buy Furnitures for Customers.",
            "links": {
                "preview": "https://alcazarfinewood.vercel.app/",
                "github": "https://github.com/web-ghoul/AlCazar"
            },
            "skills": ["Next", "Material UI", "Redux Toolkit", "Node", "Node",
                "Express", "MongoDB"],
        },
        {
            "img": tournamentImg,
            "title": "Chess Tournament",
            "role": "Frontend Developer",
            "description": "Application to help Players to management the Competition",
            "links": {
                "preview": "https://chess-tournament.onrender.com/",
                "github": "https://github.com/web-ghoul/Tournament-App"
            },
            "skills": ["Javascript", "HTML5", "CSS3", "React", "Material UI", "Node",
                "Express", "MongoDB"],
        },
        {
            "img": blogImg,
            "title": "webGhoul Blogging",
            "role": "Frontend Developer",
            "description": "Small Blogging Application , I was Trying Firebase Authentication",
            "links": {
                "preview": "https://webghoul-blogging-app.web.app/",
                "github": "https://github.com/web-ghoul/webGhoul-Blogging"
            },
            "skills": ["HTML5", "CSS3", "Javascript", "React", "Firebase", "API"],
        },
        {
            "img": cashierImg,
            "title": "webGhoul System",
            "role": "Frontend Developer",
            "description": "Online Restaurant Cashier , I was trying React Redux Toolkit",
            "links": {
                "preview": "https://webghoul-cashier.onrender.com/",
                "github": "https://github.com/web-ghoul/webGhoul_Cashier"
            },
            "skills": ["HTML5", "CSS3", "Javascript", "React", "Firebase", "API"],
        },
        {
            "img": newsImg,
            "title": "News Management",
            "role": "Desktop Developer",
            "description": "Desktop Application As Data Structure Project For College",
            "links": {
                "preview": "https://www.linkedin.com/posts/mahmoud-salama-23b627211_qt-cpp-desktopapplications-activity-7074419155893952514-u7yA?utm_source=share&utm_medium=member_desktop",
                "github": "https://github.com/web-ghoul/News-Management-App"
            },
            "skills": ["QT", "SQLITE"],
        },
        {
            "img": codingForEveryone,
            "title": "Coding For Everyone",
            "role": "Frontend Developer",
            "description": "Educational Website to Learn Programming for Kids",
            "links": {
                "preview": "https://codingforeveryone-bfd1d.web.app/",
                "github": "https://github.com/web-ghoul/Coding_for_Everyone"
            },
            "skills": ["HTML5", "CSS3", "Javascript", "React", "Firebase"],
        },
        {
            "img": webGhoulCalcImg,
            "role": "Frontend Developer",
            "title": "webGhoul Calc.",
            "description": "Small Calculator and Currency Rate Application",
            "links": {
                "preview": "https://webghoul-calc.web.app/",
                "github": "https://github.com/web-ghoul/webGhoul-Calculator"
            },
            "skills": ["HTML5", "CSS3", "Javascript", "React", "Firebase", "API"],
        },
        {
            "img": toDo,
            "role": "Frontend Developer",
            "title": "ToDo List App",
            "description": "Small Todo Application , It was task for MSP when i was Member",
            "links": {
                "preview": "https://web-ghoul.github.io/Todo-app/",
                "github": "https://github.com/web-ghoul/Todo-app"
            },
            "skills": ["HTML5", "CSS3", "Javascript"],
        },
        {
            "img": jquery3,
            "role": "Frontend Developer",
            "title": "Yogax",
            "description": "Complete Website with Jquery",
            "links": {
                "preview": "",
                "github": "https://github.com/web-ghoul/jquery-complete-website"
            },
            "skills": ["HTML5", "CSS3", "Javascript", "JQuery", "Font Awesome"],
        },
        {
            "img": jquery2,
            "role": "Frontend Developer",
            "title": "Foxeresto",
            "description": "Web Page with JQuery",
            "links": {
                "preview": "https://web-ghoul.github.io/Jquery-Page-2/",
                "github": "https://github.com/web-ghoul/Jquery-Page-2"
            },
            "skills": ["HTML5", "CSS3", "Javascript", "JQuery", "Font Awesome"],
        },
        {
            "img": jquery1,
            "role": "Frontend Developer",
            "title": "Studio",
            "description": "Web Page with JQuery",
            "links": {
                "preview": "https://web-ghoul.github.io/Jquery-Page-1/",
                "github": "https://github.com/web-ghoul/Jquery-Page-1"
            },
            "skills": ["HTML5", "CSS3", "Javascript", "JQuery", "Font Awesome"],
        },
    ]
}

const projectsSlice = createSlice({
    name: "projects",
    initialState,
})

export default projectsSlice.reducer