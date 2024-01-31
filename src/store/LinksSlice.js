import { createSlice } from "@reduxjs/toolkit"

const initialState={
    links:{
        "github":"https://github.com/web-ghoul",
        "youtube":"https://www.youtube.com/channel/UCdW0-PulQScwMo-AUWL8qAA",
        "facebook":"https://www.facebook.com/mahmoud.gogoo.5/",
        "whatsapp":"https://wa.me/+201094851646",
        "linkedin":"https://www.linkedin.com/in/mahmoud-salama-23b627211/"
    }
}

const linksSlice= createSlice({
    name:"links",
    initialState,
})

export default linksSlice.reducer