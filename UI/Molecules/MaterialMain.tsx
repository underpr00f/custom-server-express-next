import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {fontFamily: "Roboto, sans-serif"},
    h1: {
      fontFamily: "Playfair Display, sans-serif",
      fontWeight: "700",
      fontSize: "58px",
      lineHeight: "70px",
      color: `${theme.palette.text.secondary}`,
      textAlign: "center"
    },
    h2: {
      fontFamily: "Playfair Display, sans-serif",
      fontWeight: "700",
      fontSize: "58px",
      lineHeight: "70px",
      color: `${theme.palette.primary.main}`,
      textAlign: "center",
      [theme.breakpoints.down('xs')]: {
        fontSize: "45px",
        lineHeight: "50px",
      },
    },
    h3: {
      fontFamily: "Playfair Display, sans-serif",
      fontWeight: "700",
      fontSize: "30px",
      lineHeight: "70px",
      color: `${theme.palette.primary.dark}`,
      textAlign: "center"
    },
    h4: {
      fontSize: '18px',
      lineHeight: '22px',
      color: `${theme.palette.text.secondary}`,
      margin: 0
    },
    h5: {
      color: `${theme.palette.text.primary}`,
    },
    h6: {
      color: `${theme.palette.text.primary}`,
    },
    'button span': {
      color: `${theme.palette.text.secondary}`,
    },
    'header a': {
      color: `${theme.palette.text.secondary}`,
      opacity: 0.9
    },
    'header a.active, header a:hover': {
      color: `${theme.palette.primary.light}`,
      filter: "brightness(150%)",
    },
    '.title-container': {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '32px',
      backgroundSize: 'cover',
      backgroundColor: `${theme.palette.background.default}`,
      backgroundImage: 'url(https://images.unsplash.com/photo-1498252992631-9380b51a1baf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      padding: '10em 3em 14em',
      textAlign: "center"
    },
    header: {
      backgroundColor: 'transparent!important',
    },
    '.header': {
      position: 'relative',
      width: '100%'
    },
    '.header>div:first-child': {
      position: 'absolute',
      zIndex: 99,
      left:'0',
      right:'0'
    },
    '.header header': {
      width: '100%',
    },
    '.banner-hero': {
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      position: 'relative',
    },
    '.banner-img': {
      position: 'absolute',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      objectFit: 'cover',
      width: '100%',
      left:'0',
      right:'0',
      top:'0',
      bottom:'0',
      zIndex: -1
    },
    '.banner-content': {
      display: 'flex',
      flexDirection: 'column',
      width: '600px',
      padding: '0.5rem 1rem',
      background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 100%)`,
    },
    '.subtitle': {
      background: `${theme.palette.primary.main}`,
      padding: '2rem 0' 
    },
    '.subtitle-container': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
      },
    },
    '.subtitle-container h4': {
      [theme.breakpoints.down('xs')]: {
        marginBottom: '15px'
      },
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export const MaterialMain = ({ children }: {children:React.ReactNode}) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

MaterialMain.propTypes = {
  children: PropTypes.node,
}
