import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5em 10em',
  },
}))

export const MaterialForm = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

MaterialForm.propTypes = {
  children: PropTypes.node,
}
