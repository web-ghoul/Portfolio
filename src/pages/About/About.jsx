import React from 'react'
import Box from '@mui/material/Box'
import AboutSection from '../../sections/AboutSection/AboutSection'
import { Divider } from '@mui/material'
import SkillsSection from '../../sections/SkillsSection/SkillsSection'
import ExperienceSection from '../../sections/ExperienceSection/ExperienceSection'

const About = () => {
  return (
    <Box>
      <AboutSection/>
      <Divider className={`border`}/>
      <SkillsSection/>
      <Divider className={`border`}/>
      <ExperienceSection/>
      <Divider className={`border`}/>
    </Box>
  )
}

export default About
