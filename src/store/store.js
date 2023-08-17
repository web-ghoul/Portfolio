import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"
import linksReducer from "./LinksSlice"
import projectsReducer from "./projectsSlice"
import skillsReducer from "./skillsSlice"
import certificatesReducer from "./certificatesSlice"
import ExperiencesReducer from "./ExperiencesSlice";
import packagesReducer from "./packagesSlice"

export const store = configureStore({
    reducer:{
        theme:themeReducer,
        links:linksReducer,
        projects:projectsReducer,
        skills:skillsReducer,
        certificates:certificatesReducer,
        experiences:ExperiencesReducer,
        packages:packagesReducer
    }
})