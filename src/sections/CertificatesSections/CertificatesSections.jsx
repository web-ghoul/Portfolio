import React from 'react'
import {useSelector} from "react-redux"

import {MyBox} from "../../muiComponentsStyled/MyBox/MyBox"
import {Container,Box} from '@mui/material'
import Head from "../../components/Head/Head"

import styles from "./CertificatesSections.module.css"
 
const CertificatesSections = () => {
    const certificates = useSelector((state)=>state.certificates.certificates)
    return (
        <MyBox>
        <Container className={`grid jcs aic gl`}>
            <Head title={"Certificates"}/>
            <Box className={`grid aic jcc gm ${styles.certs}`}>
                {
                    certificates && certificates.map((cert,i)=>{
                        return (
                            <Box key={i} className={`flex aic jcc`}>
                                <Box component={"img"} alt={cert.img} src={cert.img} />
                            </Box>
                        )
                    })
                }
            </Box>
        </Container>
        </MyBox>
    )
}

export default CertificatesSections
