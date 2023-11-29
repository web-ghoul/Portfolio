import { createSlice } from "@reduxjs/toolkit"
import html5 from "../static/images/html.png"
import css3 from "../static/images/css-3.png"
import Javascript from "../static/images/js.png"
import Jquery from "../static/images/jquery.png"
import react from "../static/images/react.png"
import mui from "../static/images/mui.png"
import Firebase from "../static/images/firebase.png"
import Sass from "../static/images/sass.png"
import Nest from "../static/images/nestjs.svg"
import Git from "../static/images/git.png"
import Node from "../static/images/node-js.png"
import Express from "../static/images/express-js.png"
import MongoDB from "../static/images/mongoDB.png"
import MySql from "../static/images/mysql.png"
import Linux from "../static/images/linux.png"
import Python from "../static/images/python.png"
import Qt from "../static/images/qt.png"
import Sqlite from "../static/images/sqlite.png"
import api from "../static/images/api.png"
import nextImg from "../static/images/next-js.svg"
import postgreSQLImg from "../static/images/postgresql.svg"
import fontawesome from "../static/images/fontawesome.png"

const initialState = {
    skills: [
        {
            "skill": "Next.js",
            "img": nextImg,
            "level": 4
        },
        {
            "skill": "React",
            "img": react,
            "level": 4
        },
        {
            "skill": "Node",
            "img": Node,
            "level": 4
        },
        {
            "skill": "Nest",
            "img": Nest,
            "level": 3
        },
        {
            "skill": "Express",
            "img": Express,
            "level": 4
        },
        {
            "skill": "PostgreSQL",
            "img": postgreSQLImg,
            "level": 4
        },
        {
            "skill": "MongoDB",
            "img": MongoDB,
            "level": 4
        },
        {
            "skill": "Jquery",
            "img": Jquery,
            "level": 5
        }, {
            "skill": "Material UI",
            "img": mui,
            "level": 4
        },
        {
            "skill": "Sass",
            "img": Sass,
            "level": 4
        }, {
            "skill": "Font Awesome",
            "img": fontawesome,
            "level": 4
        },
        {
            "skill": "HTML5",
            "img": html5,
            "level": 5
        },
        {
            "skill": "CSS3",
            "img": css3,
            "level": 5
        }, {
            "skill": "Javascript",
            "img": Javascript,
            "level": 5
        }, {
            "skill": "Firebase",
            "img": Firebase,
            "level": 3
        }, {
            "skill": "Git",
            "img": Git,
            "level": 5
        },
        {
            "skill": "RESTful API",
            "img": api,
            "level": 5
        }, {
            "skill": "MySql",
            "img": MySql,
            "level": 5
        }, {
            "skill": "Sqlite",
            "img": Sqlite,
            "level": 4
        }, {
            "skill": "Qt",
            "img": Qt,
            "level": 3
        },
        {
            "skill": "Python",
            "img": Python,
            "level": 4
        },
        {
            "skill": "Linux",
            "img": Linux,
            "level": 4
        },
    ]
}

const skillsSlice = createSlice({
    name: "skills",
    initialState,
})

export default skillsSlice.reducer