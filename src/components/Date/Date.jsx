import React from 'react'

//Material UI Files
import { useTheme } from '@emotion/react'
import {Typography,Box} from '@mui/material'

//Style File
import styles from "./Date.module.css"

const Date = ({text}) => {
    const theme = useTheme()
    return (
        <Box className={`flex jcc aic ${styles.date_box}`}>
            <Typography variant="h5" color={theme.palette.primary.main}>{text}</Typography>
        </Box>
    )
}

export default Date
