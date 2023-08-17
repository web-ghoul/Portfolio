import {createSlice} from "@reduxjs/toolkit"
import bracketTournaments from "../static/images/webGhoul-react-bracket-tournaments.png"

const initialState={
    packages:[
        {
            "title":"webGhoul-react-bracket-tournaments",
            "description":"Package to draw Bracket Tournament with React.js",
            "links":{
                "preview":"https://www.npmjs.com/package/webghoul-react-bracket-tournaments",
                "github":"https://github.com/web-ghoul/webghoul-react-bracket-tournaments"
            },
            "img":bracketTournaments,
            "skills":["HTML","CSS","React"]
        }
    ]
}

const packagesSlice = createSlice({
    name:"packages",
    initialState,
})

export default packagesSlice.reducer