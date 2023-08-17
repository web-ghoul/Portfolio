import React from 'react'

//Material UI Files
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Typography } from '@mui/material'
import { useTheme } from '@emotion/react';

//Style File
import styles from "./Head.module.css"

const Head = ({title , darkness}) => {
    
    const theme = useTheme()

    return (
        <Box className={`flex jcfs aic`}>
            <KeyboardArrowLeftIcon fontSize={"large"} className={`${theme.palette.mode === "dark" ? styles.icon_dark : styles.icon_light}`}/>
            <Typography variant='h4' className={`ubuntu-font ttuc ${darkness ? styles.text_dark : styles.text_light}`}>{title}</Typography>
            <KeyboardArrowRightIcon fontSize={"large"} className={`${theme.palette.mode === "dark" ? styles.icon_dark : styles.icon_light}`}/>
        </Box>
    )
}

export default Head
