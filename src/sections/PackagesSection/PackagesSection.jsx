import React from 'react'
import {useSelector} from "react-redux"

//MaterialUI Files
import {MyBox} from "../../muiComponentsStyled/MyBox/MyBox"
import { Container, Box } from '@mui/material'

//Components
import Head from "../../components/Head/Head"
import Package from '../../components/Package/Package'

//Styles File
import styles from "./PackagesSection.module.css"

const PackagesSection = () => {
  const packages = useSelector((state)=>state.packages.packages)
  return (
    <MyBox>
      <Container className={`grid jcs aic gl`}>
        <Head title={"Packages"}/>
        <Box className={`grid jcc aifs gm ${styles.packages}`}>
          {
              packages.map((p,i)=>{
                  return (
                      <Package key={i} pack={p}/>
                  )
            })
          }
        </Box>
      </Container>
    </MyBox>
  )
}

export default PackagesSection
