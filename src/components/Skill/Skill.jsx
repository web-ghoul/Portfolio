import React from 'react'
import { useSelector } from 'react-redux'

//Material UI File
import { Box, Typography, Button } from '@mui/material'
import { useTheme } from '@emotion/react'

//Styles Files
import styles from "./Skill.module.css"

//Stars Component
import Stars from '../Stars/Stars'

const Skill = ({title , img , level}) => {

  const mode = useSelector((state)=>state.theme.mode)

  const theme = useTheme()
  
  return (
    <Box className={`flex jcc aic ${mode === "dark" ? styles.skill_dark : styles.skill_light} ${styles.skill}`}>
      <Box className={`grid jcc aic ${styles.side} ${styles.front}`}>
        <Box component={"img"} alt={title} src={img}/>
        <Typography variant='h5' className={`tac`}>{title}</Typography>
      </Box>
      <Box sx={{backgroundColor:theme.palette.white}} className={`grid jcc aic ${styles.side} ${styles.top}`}>
        <Box component={"img"} alt={title} src={img}/>
        {/* <Stars num={level}/> */}
        {/* <Button sx={{backgroundColor:theme.palette.primary.main , color:theme.palette.white}}  variant="text" color="primary">Projects</Button> */}
      </Box>
    </Box>
  )
}

export default Skill
