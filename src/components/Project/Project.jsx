import React from 'react'
import {useSelector} from "react-redux"

//Material UI Files
import { Box, Typography, Paper, Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import {MyButton} from "../../muiComponentsStyled/MyButton/MyButton"
import PreviewIcon from '@mui/icons-material/Preview';
import { useTheme } from '@emotion/react';


//image
import project_dark from "../../static/images/project_dark.png"
import project_light from "../../static/images/project_light.png"

//Styles File
import styles from "./Project.module.css"

const Project = ({project}) => {
  const mode = useSelector((state)=>state.theme.mode)

  const theme = useTheme()
  
  return (
    <Box sx={{"&:after":{backgroundImage: mode === "dark" ? `url(${project_light})` :`url(${project_dark})` },backgroundColor:mode === "dark" ? theme.palette.black_alt : theme.palette.main_alt , boxShadow: mode !== "dark" ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "inset 0 0 0 200px rgb(255, 255, 255, 0.01)"}} className={`grid aic jcc gs ${styles.project}`}>
      <Box className={`flex jcc aic ${styles.image}`}>
        <Box component="img" src={project.img} alt={project.title} />
      </Box>
      <Box className={`grid jcs aic gm ${styles.content}`}>
        <Box className={`grid jcfs aic`}>
          <Typography variant='h5' sx={{color:mode === "dark"? theme.palette.main:theme.palette.dark}}>{project.title}</Typography>
          <Typography sx={{fontWeight:500}} variant='h6'>{project.description}</Typography>
        </Box>
        <Divider
          variant="fullWidth"
          orientation="horizontal"
        />
        <Box sx={{zIndex:2}} className={`flex jcsb aic gs`}>
          <MyButton onClick={()=>document.location.href=project.links.preview} className={`flex jcc aic gs`}>
            <PreviewIcon/>
            Preview
          </MyButton>
          <MyButton onClick={()=>document.location.href=project.links.github} className={`flex jcc aic gs`}>
            <GitHubIcon/>
            Github
          </MyButton>
        </Box>
        <Divider
          variant="fullWidth"
          orientation="horizontal"
        />
        <Box className={`flex jcfs aic gs ${styles.skills}`}>
          {
            project.skills.map((skill,i)=>{
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

export default Project
