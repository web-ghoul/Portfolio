import React from 'react'

//Material UI Files
import {MyBox} from "../../muiComponentsStyled/MyBox/MyBox"
import {  Container, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

//Styles File
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <MyBox component={"footer"} className={`${styles.footer_section}`}>
            <Container className={`${styles.copy}`}>
                <Typography variant='h5' className={`flex jcc aic gs`}>
                    Made With <FavoriteIcon color="error"/> By webGhoul © 2023
                </Typography>
            </Container>
        </MyBox>
    )
}

export default Footer
