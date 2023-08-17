import {createSlice} from "@reduxjs/toolkit"

//Images
import CyberusImg from "../static/images/cyberus.jpg"
import SupportImg from "../static/images/support.jpg"
import ACPCImg from "../static/images/acpc.jpg"
import MSPImg from "../static/images/msp.jpg"
import programming_teacher from "../static/images/teacher.png"

const initialState={
    experiences:[
        {
            "year":"2022",
            "img":MSPImg,
            "title":"Web Development Team Lead",
            "description":"Work At MSP Tech Club - ASU",
            "date":"January 2022 - Present"
        },
        {
            "year":"2022",
            "img":CyberusImg,
            "title":"Wireless Security Workshop",
            "description":"Trainee At Cyberus Workshop",
            "date":"February 2022 - March 2022"
        },
        {
            "year":"2021",
            "img":programming_teacher,
            "title":"Programming Teacher",
            "description":"Work as Freelancer",
            "date":"September 2021 - Present"
        },
        {
            "year":"2021",
            "img":ACPCImg,
            "title":"ACPC Competition",
            "description":"Learn Cyber Security At Support Community",
            "date":"July 2021 - August 2021"
        },
        {
            "year":"2021",
            "img":SupportImg,
            "title":"Cyber Security Member",
            "description":"Learn Cyber Security At Support ASU Community",
            "date":"January 2021 - December 2021"
        },
    ]
}

const experiencesSlice= createSlice({
    name:"experiences",
    initialState,
})

export default experiencesSlice.reducer