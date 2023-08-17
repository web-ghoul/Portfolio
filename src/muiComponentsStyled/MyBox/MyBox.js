import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const MyBox = styled(Box)(({theme})=>(
    {
        paddingBottom:"50px",
        paddingTop:"50px",
        [theme.breakpoints.down("md")]:{
            paddingBottom:"30px",
            paddingTop:"30px",
        },
        [theme.breakpoints.down("sm")]:{
            paddingBottom:"20px",
            paddingTop:"20px",
        }
    }
))