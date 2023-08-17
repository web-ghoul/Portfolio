import styled from '@emotion/styled'
import {Button } from '@mui/material'


export const MyButton = styled(Button)(({theme})=>(
    {
        ...theme.palette.mode === "dark" ?
        {backgroundColor: "var(--black) !important" ,
        boxShadow: "0 2px 25px rgb(255,255,255,0.05) !important",}:
        {backgroundColor: "var(--white) !important",
        boxShadow: "0 2px 25px var(--main-alt) !important"},
        fontSize: "18px !important",
        padding: "10px 20px !important",
        appearance:" none !important",
        color: "var(--main)",
        borderRadius:" 4px !important",
        border: "none !important",
        cursor:" pointer !important",
        position: "relative !important",
        transition: "transform ease-in 0.1s, box-shadow ease-in 0.25s !important",
        "&:focus":{
            outline: "0"
        },
        "&:before , &:after":{
            position: "absolute",
            content: `'""'`,
            display: "block",
            width: "140%",
            height: "100%",
            left: "-20%",
            zIndex: "-1000",
            transition: "all ease-in-out 0.5s",
            backgroundRepeat: "no-repeat"
        },
        "&:before":{
            display: "none",
            top: "-75%",
            ...theme.palette.mode === "dark"?
                {
                    backgroundImage:"radial-gradient(circle, var(--black) 20%, transparent 20%),radial-gradient(circle,  transparent 20%, var(--black) 20%, transparent 30%),radial-gradient(circle,var(--black) 20%, transparent 20%), radial-gradient(circle, var(--black)20%, transparent 20%),radial-gradient(circle,  transparent 10%,var(--black) 15%, transparent 20%),radial-gradient(circle, var(--black) 20%, transparent 20%),radial-gradient(circle,var(--black) 20%, transparent 20%),radial-gradient(circle, var(--black) 20%, transparent 20%),radial-gradient(circle, var(--black) 20%, transparent 20%);"
                }:{
                    backgroundImage:"radial-gradient(circle, var(--main) 20%, transparent 20%),radial-gradient(circle,  transparent 20%, var(--main) 20%, transparent 30%),radial-gradient(circle,var(--main) 20%, transparent 20%), radial-gradient(circle, var(--main)20%, transparent 20%),radial-gradient(circle,  transparent 10%,var(--main) 15%, transparent 20%), radial-gradient(circle, var(--main) 20%, transparent 20%),radial-gradient(circle,var(--main) 20%, transparent 20%),radial-gradient(circle, var(--main) 20%, transparent 20%),radial-gradient(circle, var(--main) 20%, transparent 20%);",
                },
            backgroundSize: "10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;"
        },
        "&:after":{
            display: "none",
            bottom: "-75%",
            ...theme.palette.mode==="dark"?
            {
                backgroundImage: "radial-gradient(circle,var(--black-alt) 20%, transparent 20%), radial-gradient(circle, var(--black-alt)20%, transparent 20%),radial-gradient(circle,  transparent 10%,var(--black-alt) 15%, transparent 20%),radial-gradient(circle,var(--black-alt) 20%, transparent 20%),radial-gradient(circle, var(--black-alt) 20%, transparent 20%),radial-gradient(circle, var(--black-alt) 20%, transparent 20%),radial-gradient(circle, var(--black-alt) 20%, transparent 20%);"
            }:{
                backgroundImage:"radial-gradient(circle,var(--main-alt) 20%, transparent 20%), radial-gradient(circle, var(--main-alt)20%, transparent 20%),radial-gradient(circle,  transparent 10%,var(--main-alt) 15%, transparent 20%),radial-gradient(circle,var(--main-alt) 20%, transparent 20%),radial-gradient(circle, var(--main-alt) 20%, transparent 20%),radial-gradient(circle, var(--main-alt) 20%, transparent 20%),radial-gradient(circle, var(--main-alt) 20%, transparent 20%);",
            },
            backgroundSize: "15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;"
        },
        "&:active":{
            transform: "scale(0.9)",
            ...theme.palette.mode === "dark"?
            {
                backgroundColor: "#111 !important" ,
                boxShadow: "0 2px 25px var(--black-alt) !important",
            }:{
                backgroundColor: "var(--white) !important",
                boxShadow: "0 2px 25px var(--main-alt) !important"
            }
        }    
    }
))