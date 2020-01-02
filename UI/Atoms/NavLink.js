import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}))

export const NavLink = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {children}
      </Typography>
    </>
  )
}

NavLink.propTypes = {
  children: PropTypes.node,
}
