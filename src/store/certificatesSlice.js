import { createSlice } from "@reduxjs/toolkit"

import js_freecodecamp from "../static/images/JS_Cert.png"
import js_hackerrank from "../static/images/JS_Cert_heackerrank.png"
import web_freecodecamp from "../static/images/Web_Cert.png"
import egyFwd from "../static/images/egyfwd.png"
import web_security from "../static/images/web_security.png"
import wireless_security from "../static/images/wireless_security.jpg"


const initialState={
    certificates:[
        {
            "img":web_security
        },
        {
            "img":wireless_security
        },
        {
            "img":js_freecodecamp
        },
        {
            "img":js_hackerrank
        },
        {
            "img":web_freecodecamp
        },
        {
            "img":egyFwd
        }
    ]
}

const projectsSlice = createSlice({
    name:"certificates",
    initialState,
})

export default projectsSlice.reducer