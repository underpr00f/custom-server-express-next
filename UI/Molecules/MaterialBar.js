import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  '@global': {
    html: {
      scrollBehavior: 'smooth',
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
    h1: {
      color: `${theme.palette.primary.dark}`,
    },
    h4: {
      color: `${theme.palette.primary.main}`,
    },
    a: {
      color: `${theme.palette.primary.light}`,
    },
    'a.active': {
      color: `${theme.palette.primary.dark}`,
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export const MaterialBar = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {children}
          <Button color="secondary">Not Ready</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

MaterialBar.propTypes = {
  children: PropTypes.node,
}
