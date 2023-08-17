import { Box,ThemeProvider } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {createTheme} from "@mui/material"
import { useSelector } from 'react-redux';
import {Outlet } from 'react-router-dom';
import MyDial from './components/MyDial/MyDial';

function App() {
  const mode =useSelector((state)=>state.theme.mode)

  const theme = createTheme({
    palette:{
        mode,
        ...(mode === "light")?{
          primary:{
              main:"#00aeff",
              light:"#0099e5",
              dark:"#0077c8"
          },
          secondary:{
              main:"#ff3131",
              light:"#ff6c5f",
              dark:"#ff0000"
          },
          background:{
            default:"#00aeff",
            paper:"#00aeff"
          },
          text:{
            primary:"#fff"
          },
        }:{
          primary:{
              main:"#111",
              light:"#222",
              dark:"#000"
          },
          secondary:{
              main:"#ff3131",
              light:"#ff6c5f",
              dark:"#ff0000"
          },
          background:{
            default:"#111",
            paper:"#111"
          },
          text:{
            primary:"#fff"
          },
        },
        main:"#00aeff",
        main_alt:"rgba(0, 174, 255, 1)",
        white:"#fff",
        black:"#000",
        yellow:"#fff000",
        gray:"#ddd",
        youtube:"#ff0000",
        linkedin:"#0a66c2",
        facebook:"#1877f2",
        instagram:"#fcaf45",
        gmail:"#ea4335",
        whatsapp:"#25d366",
        github:"#333"
    },
    breakpoints:{
        xs:{
            width: "0px",
        },
        sm:{
            width:"576px",
        },
        md:{
            width:"768px",
        },
        lg:{
            width:"992px",
        },
        xl:{
            width:"1200px",
        }
    },
    ...(mode === "light")?
    {
      shadows:{
        1:"0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        4:"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4x 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);",
        6:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);"
      }
    }:{
      shadows:{
        1:"0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        4:"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4x 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);",
        6:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
      }
    }
  })

  theme.typography.h1 = {
      fontSize: '100px',
      [theme.breakpoints.down('lg')]: {
        fontSize: '95px',
      },
      [theme.breakpoints.down('md')]: {
          fontSize: '90px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '70px',
      },
  };

  theme.typography.h2 = {
      fontSize: '85px',
      [theme.breakpoints.down('lg')]: {
        fontSize: '80px',
      },
      [theme.breakpoints.down('md')]: {
          fontSize: '75px',
      },
      [theme.breakpoints.down('sm')]: {
          fontSize: '65px',
      },
  };

  theme.typography.h3 = {
      fontSize: '65px',
      [theme.breakpoints.down('lg')]: {
        fontSize: '60px',
      },
      [theme.breakpoints.down('md')]: {
          fontSize: '50px',
      },
      [theme.breakpoints.down('sm')]: {
          fontSize: '40px',
      },
  };

  theme.typography.h4 = {
      fontSize: '35px',
      [theme.breakpoints.down('lg')]: {
        fontSize: '32px',
      },
      [theme.breakpoints.down('md')]: {
          fontSize: '30px',
      },
      [theme.breakpoints.down('sm')]: {
          fontSize: '22px',
      },
  };

  theme.typography.h5 = {
      fontSize: '25px',
      [theme.breakpoints.down('lg')]: {
        fontSize: '25px',
      },
      [theme.breakpoints.down('md')]: {
          fontSize: '20px',
      },
      [theme.breakpoints.down('sm')]: {
          fontSize: '15px',
      },
  };

  theme.typography.h6 = {
      fontSize: '22px',
      [theme.breakpoints.down('md')]: {
        fontSize: '15px',
      },
      [theme.breakpoints.down('sm')]: {
          fontSize: '10px',
      },
      [theme.breakpoints.down('xm')]: {
          fontSize: '10px',
      },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component={"main"} backgroundColor={theme.palette.primary.main} className={`rel`}>
        <Header/>
        <Outlet/>
        <Footer/>
        <MyDial/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
