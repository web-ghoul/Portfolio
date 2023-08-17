import React from 'react'

//Material UI Files
import { Divider,Box } from '@mui/material'

//Sections
import MainSection from '../../sections/MainSection/MainSection'
import ContactSection from '../../sections/ContactSection/ContactSection'
import AboutSection from '../../sections/AboutSection/AboutSection'
import SkillsSection from '../../sections/SkillsSection/SkillsSection'
import ExperienceSection from '../../sections/ExperienceSection/ExperienceSection'
import ProjectsSection from '../../sections/ProjectsSection/ProjectsSection'
import PackagesSection from '../../sections/PackagesSection/PackagesSection'
import CertificatesSections from "../../sections/CertificatesSections/CertificatesSections"

const Home = () => {
  return (
    <Box>
      <MainSection/>
      <Divider className={`border`}/>
      <AboutSection/>
      <Divider className={`border`}/>
      <ExperienceSection/>
      <Divider className={`border`}/>
      <ProjectsSection/>
      <Divider className={`border`}/>
      <PackagesSection/>
      <Divider className={`border`}/>
      <SkillsSection/>
      <Divider className={`border`}/>
      <CertificatesSections/>
      <Divider className={`border`}/>
      <ContactSection/>
    </Box>
  )
}

export default Home
