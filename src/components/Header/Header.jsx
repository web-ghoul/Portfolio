import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"

//MaterialUI Files
import { AppBar, Box,IconButton, Container, FormControlLabel, Menu,MenuItem, Toolbar, useMediaQuery, Divider } from '@mui/material'
import { HeaderButton } from '../../muiComponentsStyled/HeaderButton/HeaderButton'
import { MaterialUISwitch } from '../../muiComponentsStyled/MaterialUISwitch/MaterialUISwitch'
import ListRoundedIcon from '@mui/icons-material/ListRounded';

//Theme Store
import {toggle} from "../../store/themeSlice" 

//Logo Component
import Logo from '../Logo/Logo'

//Style File
import styles from "./Header.module.css"


const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const mode  =useSelector((state)=>state.theme.mode)

  const [headerFixed , setHeaderFixed] = useState(false)

  const mobileScreen = useMediaQuery("(max-width:992px)")

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const pages=[
    {page:"Home" , func:()=>{navigate("/")}},
    {page:"About" , func:()=>{navigate("/abouT")}},
    {page:"Projects" , func:()=>{navigate("/projects")}},
    {page:"Certificates" , func:()=>{navigate("/certificates")}},
    {page:"Contact" , func:()=>{navigate("/contact")}}]

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  window.onscroll=()=>{
    if(window.scrollY > 100){
      setHeaderFixed(true)
    }else{
      setHeaderFixed(false)
    }
  }

  return (
    <AppBar className={`${headerFixed ? mode ==="dark" ? styles.active_dark : styles.active : styles.inactive}`}>
      <Container>
        <Toolbar className={`flex jcsb aic gl ${styles.toolbar}`}>
          <Logo/>
          {
            mobileScreen ? (
              <>
                <IconButton
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <ListRoundedIcon className={`${styles.menu_icon}`} fontSize='large'/>
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  className={`${mode === "dark" ? styles.menu_dark : styles.menu_light}`}
                >
                  {
                    pages.map((page,i)=>{
                      return (
                        <MenuItem key={i} onClick={()=>{handleClose(); page.func();}}>{page.page}</MenuItem>
                      )
                    })
                  }
                  <Divider/>
                  <Box className={`flex aic jcc ${styles.switch}`}>
                    <FormControlLabel onChange={()=> dispatch(toggle())}
                      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                    />
                  </Box>
                </Menu>
              </>
            ):
            (
              <>
                <Box className={`flex jcc aic gs`}>
                  {
                    pages.map((page,i)=>{
                      return (
                        <HeaderButton key={i} onClick={()=>page.func()} className={`header_btn`}>{page.page}</HeaderButton>
                      )
                    })
                  }
                </Box>
                <Box className={`flex aic jcfe ${styles.switch}`}>
                  <FormControlLabel onChange={()=> dispatch(toggle())}
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  />
                </Box>
              </>
            )
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
