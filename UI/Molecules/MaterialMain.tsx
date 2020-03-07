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
      color: `${theme.palette.primary.main}`,
    },
    h2: {
      fontFamily: "Playfair Display, sans-serif",
      fontWeight: "700",
      fontSize: "58px",
      lineHeight: "70px",
      color: `${theme.palette.primary.main}`,
      textAlign: "center"
    },
    h4: {
      fontSize: '18px',
      lineHeight: '22px',
    },
    h6: {
      color: `${theme.palette.text.primary}`,
    },
    'a.active': {
      color: `${theme.palette.primary.dark}`,
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
