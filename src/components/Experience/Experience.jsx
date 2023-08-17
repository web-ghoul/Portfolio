import React,{ useRef ,useState,useEffect} from 'react'

//Redux File
import { useSelector } from "react-redux"

//Material UI Files
import { useTheme } from '@emotion/react'
import {Box,Typography} from '@mui/material'

//Date Component
import Date from '../Date/Date'

//Style File
import styles from "./Experience.module.css"


const Experience = ({year , img , title ,description ,date}) => {
  const exp = useRef()

  const mode = useSelector((state)=>state.theme.mode)

  const theme = useTheme()
  
  const [boxHeight , setBoxHeight] = useState(0)

  useEffect(()=>{
    setBoxHeight(exp.current.offsetHeight)
  },[exp])
  
  return (
    <Box ref={exp} className={`flex jcfs asfs aifs gl`}>
        <Date text={year}/>
        <Box className={`grid jcc aifs gs ${styles.border}`}>
            <Box className={`${styles.circle}`} component={"img"} src={img} alt="msp"/>
            <Box sx={{height:boxHeight}} className={`${styles.line}`}></Box>
        </Box>
        <Box className={`grid jcfs aic gs`}>
          <Typography variant="h4" sx={{color:mode === "dark" ? theme.palette.main : theme.palette.black , lineHeight:"22px"}}>{title}</Typography>
          <Typography variant='h5'>{description}</Typography>
          <Typography sx={{fontWeight:500}} variant='h6'>{date}</Typography>
        </Box>
    </Box>
  )
}

export default Experience
