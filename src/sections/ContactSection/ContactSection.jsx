import React from 'react'
import { useSelector } from 'react-redux'

//Material UI File
import { MyBox } from '../../muiComponentsStyled/MyBox/MyBox'
import { Box, Container, Typography } from '@mui/material'

//Images
import logoImg1 from "../../static/images/logo1.png"
import logoImg from "../../static/images/logo.png"

//Component
import Head from '../../components/Head/Head'
import MyForm from '../../components/MyForm/MyForm'

//Styles File
import styles from "./ContactSection.module.css"

const ContactSection = () => {

    const mode = useSelector((state)=>state.theme.mode)
    
    return (
    <MyBox>
      <Container className={`grid aic jcs gl`}>
        <Box className={`flex jcsb aic gm`}>
            <Box className={`grid jcfs aic gm`}>
                <Head title={"Contact Me"}/>
                <Typography className={`flex jcfs aic ${styles.para}`} variant="h6">I'm interested in freelance oppertunities - especially ambitious or large projects. However, if you have other requests or question, dont't hesitate to use the form.</Typography>
            </Box>
            <Box className={`flex jcc aic ${styles.logo}`}>
                <Box component={"img"} alt="webGhoul" src={mode === "dark" ? logoImg1 : logoImg}/>
            </Box>
        </Box>
        <MyForm/>
    </Container>
    </MyBox>
  )
}

export default ContactSection
