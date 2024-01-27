import React from 'react';
import { useSelector } from 'react-redux';

//Material UI File
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { MyBox } from "../../muiComponentsStyled/MyBox/MyBox";

//Head Component
import Head from "../../components/Head/Head";

//Image
import photo from "../../static/images/photo_square.jpg";

//Styles File
import styles from "./AboutSection.module.css";

const AboutSection = () => {

    const mode = useSelector((state) => state.theme.mode)

    return (
        <MyBox className={`${mode === "dark" ? styles.about_section_dark : styles.about_section}`}>
            <Container className={`flex jcc aic gl2  ${styles.about_contain}`}>
                <Box className={`grid jcfs aic gm ${styles.info}`}>
                    <Box className={`flex jcc aic ${styles.photo_cover}`}>
                        <Box component={"img"} src={photo} className={`${styles.photo}`} />
                    </Box>
                    <Typography variant='h5' className={`tac`}>webGhoul</Typography>
                    <Box className={`flex jcc aic gs`}>
                        <IconButton className={`flex jcc aic ${styles.facebook_icon}`}>
                            <FacebookIcon fontSize='large' />
                        </IconButton>
                        <IconButton className={`flex jcc aic ${styles.linkedin_icon}`}>
                            <LinkedInIcon fontSize='large' />
                        </IconButton>
                        <IconButton className={`flex jcc aic ${styles.github_icon}`}>
                            <GitHubIcon fontSize='large' />
                        </IconButton>
                    </Box>
                </Box>
                <Box className={`grid jcfs aic gm ${styles.about_part}`}>
                    <Head title="About Me" darkness={false} />
                    <Box className={`flex jcfs aic`}>
                        <Typography variant='h5' className={`${styles.text_about}`}>
                            I am Mahmoud Salama , 22 years old , a MERN-Stack developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices.
                            <br />
                            I have a lot of passion for computer science and for any field related to Computer science.
                            <br />
                            I have 3 years Experience for computer science and 2 years Experience for Front-End Development.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </MyBox>
    )
}

export default AboutSection
