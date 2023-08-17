import styled from "@emotion/styled";
import { Button } from "@mui/material";



export const HeaderButton = styled(Button)(({theme})=>({
    fontFamily: "Cairo",
    color:"#FFFFFF",
    fontSize:"20px",
    "&:hover":{
        transition:"ease-in-out all .3s",
    },
    [theme.breakpoints.down("lg")]:{
        fontSize:"18px",
        padding:"7px 12px !important"
    },
    [theme.breakpoints.down("md")]:{
        fontSize:"16px",
        padding:"6px 10px !important"
    },
}))