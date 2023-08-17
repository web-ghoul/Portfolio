import React from 'react'
import {useSelector} from "react-redux"

//Material UI File
import Container from '@mui/material/Container'
import {MyBox} from "../../muiComponentsStyled/MyBox/MyBox"
import { Box } from '@mui/material'

//Components
import Skill from '../../components/Skill/Skill'
import Head from "../../components/Head/Head"

//Styles File
import styles from "./SkillsSection.module.css"

const SkillsSection = () => {

  const skills = useSelector((state)=>state.skills.skills)

  return (
    <MyBox>
      <Container className={`grid jcfs aic gl ${styles.skills_contain}`}>
        <Head title={"Skills"} />
        <Box className={`flex jcc aic gm ${styles.skills}`}>
          {
            skills.map((skill,i)=>{
              return (
                <Skill key={i} level={skill.level} title={skill.skill} img ={skill.img}/>
              )
            })
          }
        </Box>
      </Container>
    </MyBox>
  )
}

export default SkillsSection
