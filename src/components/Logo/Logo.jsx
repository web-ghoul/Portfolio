import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

//Material UI Files
import { Avatar, IconButton, Typography } from '@mui/material'

//Images
import logoImg1 from "../../static/images/logo1.png"
import logoImg from "../../static/images/logo.png"

//Styles File
import styles from "./Logo.module.css"

const Logo = () => {
  
  const navigate = useNavigate()

  const mode = useSelector((state)=>state.theme.mode)

  return (
    <IconButton 
      className={`flex jcfs aic gm ${styles.logo}`} 
      onClick={()=>navigate("/")} 
    >
      <Avatar alt="webGhoul" src={mode === "dark" ? logoImg1 : logoImg}/>
      <Typography variant='h4' className={`ubuntu-font`}>webGhoul</Typography>
    </IconButton>
  )
}

export default Logo
