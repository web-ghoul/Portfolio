import { createBrowserRouter } from "react-router-dom";
import App from "./App";

//Pages
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Certificates from "./pages/Certificates/Certificates";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/projects",
                element:<Projects/>
            },
            {
                path:"/certificates",
                element:<Certificates/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ]
    }
])