import {createSlice} from "@reduxjs/toolkit"

const initialState={
    mode:"light"
}

const themeSlice= createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggle:(state)=>{
            state.mode = state.mode === "dark" ? "light" : "dark" 
        }
    }
})

export const {toggle} = themeSlice.actions
export default themeSlice.reducer