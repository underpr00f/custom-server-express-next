import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '3rem',
    display: 'flex',
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.text.secondary}`,
  },
}))

export const MaterialFooter = ({ children }: {children:React.ReactNode}) => {
  const classes = useStyles()

  return (    
    <div className={classes.root}>
        {children}
    </div>
  )
}

MaterialFooter.propTypes = {
  children: PropTypes.node,
}
