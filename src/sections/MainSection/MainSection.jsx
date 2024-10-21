import React from 'react'
import { useSelector } from 'react-redux'

//Material UI Files
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import { Box, Container, Typography } from '@mui/material'
import { MyBox } from "../../muiComponentsStyled/MyBox/MyBox"
import { MyButton } from "../../muiComponentsStyled/MyButton/MyButton"

//Images and PDFS Files
import resume from "../../static/mahmoud_salama.pdf"
import photo from "../../static/images/photo.jpg"

//Styles File
import styles from "./MainSection.module.css"

const MainSection = () => {

  const mode = useSelector((state) => state.theme.mode)

  return (
    <MyBox className={`${styles.main_section}`}>
      <Container className={`grid jcs aic gl ${styles.main_contain}`}>
        <Box className={`grid jcfs aic gl ${styles.text}`}>
          <Box className={`grid jcfs aic gs`} sx={{ zIndex: 100 }}>
            <Typography variant='h1' className={`ubuntu-font ${mode === "dark" ? styles.dark : styles.light} fw800`}>Hi,</Typography>
            <Typography variant='h1' className={`ubuntu-font ${mode === "dark" ? styles.dark : styles.light} fw800`}>I'm Mahmoud Salama</Typography>
            <Typography variant='h5' className={`${mode === "dark" ? styles.dark : styles.light}`}>MERN-Stack Developer</Typography>
          </Box>
          <Box className={`flex jcfs aic gs`} sx={{ zIndex: 100 }}>
            <a href={resume} download="mahmoud_salama">
              <MyButton type="submit" className={mode === "light" ? `my_btn flex jcc aic gs` : `my_btn_alt my_btn flex jcc aic gs`}>
                <CloudDownloadIcon fontSize="large" />
                Resume
              </MyButton>
            </a>
          </Box>
        </Box>
        <Box className={`flex jcc aic ${styles.photo_section}`}>
          <Box className={`flex jcc aic ${styles.photo_cover}`}>
            <Box component={"img"} src={photo} className={`${styles.photo}`} />
          </Box>
        </Box>
      </Container>
    </MyBox>
  )
}

export default MainSection
