import React from 'react'

//Material UI File
import Box from '@mui/material/Box'
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import { useTheme } from '@emotion/react';

const Stars = ({num}) => {
    const stars = [1,2,3,4,5]

    const theme = useTheme()
    
    return (
        <Box sx={{zIndex:5}} className={`flex jcsb aic gs`}>
        {
            stars.map((star,i)=>{
                if(num >= star){
                    return (
                        <GradeSharpIcon key={i} sx={{color:theme.palette.main}}/>
                    )
                }else{
                    return (
                        <GradeSharpIcon key={i} sx={{color:theme.palette.gray}}/>
                    )
                }
            })
        }
        </Box>
    )
}

export default Stars
