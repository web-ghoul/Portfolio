import React from 'react'
import {useSelector} from "react-redux"

//Material UI File
import { MyBox } from '../../muiComponentsStyled/MyBox/MyBox'
import { useTheme } from '@emotion/react'
import {Container,Box} from '@mui/material'



//Components
import Experience from '../../components/Experience/Experience'
import Head from '../../components/Head/Head'

const ExperienceSection = () => {

  const mode = useSelector((state)=>state.theme.mode)

  const theme = useTheme()
  
  const experiences = useSelector((state)=>state.experiences.experiences)

  return (
    <MyBox sx={{backgroundColor:mode === "dark" ? theme.palette.primary.light : theme.palette.main}}>
      <Container className={`grid jcs aic gl`}>
            <Head title={"Experience"}/>
            <Box className={`grid jcfs aic gm`}>
              {
                experiences.map((exp,i)=>{
                  return (
                    <Experience key={i} year={exp.year} img={exp.img} title={exp.title} description={exp.description} date={exp.date}/>
                  )
                })
              }
            </Box>
      </Container>
    </MyBox>
  )
}

export default ExperienceSection
