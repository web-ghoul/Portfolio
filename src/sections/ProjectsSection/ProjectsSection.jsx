import React from 'react'
import {useSelector} from "react-redux"

//MaterialUI Files
import {MyBox} from "../../muiComponentsStyled/MyBox/MyBox"
import { Container, Box } from '@mui/material'

//Components
import Head from "../../components/Head/Head"
import Project from '../../components/Project/Project'

//Styles File
import styles from "./ProjectsSection.module.css"

const ProjectsSection = () => {
  const projects=useSelector((state)=>state.projects.projects)
  return (
    <MyBox>
      <Container className={`grid jcs aic gl`}>
        <Head title={"Projects"}/>
        <Box className={`grid jcc aifs gm ${styles.projects}`}>
          {
            projects.map((project,i)=>{
              return (
                <Project key={i} project={project}/>
              )
            })
          }
        </Box>
      </Container>
    </MyBox>
  )
}

export default ProjectsSection
