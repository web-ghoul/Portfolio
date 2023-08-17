import React from 'react'
import { useSelector } from 'react-redux';

//Material UI Files
import { SpeedDial, SpeedDialAction } from '@mui/material'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@emotion/react';

//Styles File
import styles from "./MyDial.module.css"


const MyDial = () => {
    const theme = useTheme()

    const mode = useSelector((state)=>state.theme.mode)

    const links = useSelector((state)=>state.links.links)

    const contacts = [
        { icon: <FacebookIcon/>, name: 'Facebook',color:theme.palette.facebook},
        { icon: <LinkedInIcon/>, name: 'Linkedin' ,color:theme.palette.linkedin},
        { icon: <WhatsAppIcon/>, name: 'Whatsapp' ,color:theme.palette.whatsapp},
        { icon: <GitHubIcon/>, name: 'Github' ,color:theme.palette.github},
    ];
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={<PhoneEnabledIcon/>}
            className={`${styles.parent_button}`}
        >
            {contacts.map((contact,i) => (
                <SpeedDialAction
                    key={i}
                    icon={contact.icon}
                    tooltipTitle={contact.name}
                    sx={{"&:hover":{
                    color:contact.color,
                    backgroundColor: mode ==="light" ? theme.palette.white:theme.palette.black
                    }}}
                    onClick={()=>document.location.href=links[contact.name.toLowerCase()]}
                />
            ))}
        </SpeedDial>
    )
}

export default MyDial
