import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { MyButton } from '../../muiComponentsStyled/MyButton/MyButton'

import {GitHub,Preview} from "@mui/icons-material"
import { useTheme } from '@emotion/react'
import { useSelector } from 'react-redux'

import packageImg from "../../static/images/box.png"
import styles from "./Package.module.css"

const Package = ({pack}) => {
    const mode = useSelector((state)=>state.theme.mode)

    const theme = useTheme()
    // 
    return (
      <Box sx={{"&:after":{backgroundImage: mode === "dark" ? `url(${packageImg})` :`url(${packageImg})` },backgroundColor:mode === "dark" ? theme.palette.black_alt : theme.palette.main_alt , boxShadow: mode !== "dark" ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "inset 0 0 0 200px rgb(255, 255, 255, 0.01)"}} className={`grid aic jcc gs ${styles.package}`}>
        <Box className={`flex jcc aic ${styles.image}`}>
          <Box component="img" src={pack.img} alt={pack.title} />
        </Box>
        <Box className={`grid jcs aic gm ${styles.content}`}>
          <Box className={`grid jcfs aic`}>
            <Typography variant='h5' sx={{color:mode === "dark"? theme.palette.main:theme.palette.dark}}>{pack.title}.</Typography>
            <Typography sx={{fontWeight:500}} variant='h6'>{pack.description}</Typography>
          </Box>
          <Divider
            variant="fullWidth"
            orientation="horizontal"
          />
          <Box sx={{zIndex:2}} className={`flex jcsb aic gs`}>
            <MyButton onClick={()=>document.location.href=pack.links.preview} className={`flex jcc aic gs`}>
              <Preview/>
                Preview
              </MyButton>
              <MyButton onClick={()=>document.location.href=pack.links.github} className={`flex jcc aic gs`}>
                <GitHub/>
                Github
              </MyButton>
          </Box>
          <Divider
            variant="fullWidth"
            orientation="horizontal"
          />
          <Box className={`flex jcfs aic gs ${styles.skills}`}>
            {
                pack.skills.map((skill,i)=>{
                return (
                  <Paper key={i} variant='outlined' className={`${styles.paper}`}>
                    <Typography sx={{fontWeight:500}} variant='h6'>{skill}</Typography>
                  </Paper>
                )
              })
            }
          </Box>
        </Box>
      </Box>
    )
}

export default Package
