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
      backgroundImage: 'url(https://source.unsplash.com/random/?yellow)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      padding: '10em 3em',
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export const MaterialMain = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

MaterialMain.propTypes = {
  children: PropTypes.node,
}
