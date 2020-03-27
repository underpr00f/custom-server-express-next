import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '8em 0 10em',
    '& h3': {
      fontSize: '44px',
      lineHeight: '46px',
      letterSpacing: '-.5',
    },
    '& p': {
      marginBottom: '1.5em',
      fontSize: '18px',
      lineHeight: '26px',
      letterSpacing: '-.5',
    }
  },
}))

export const MaterialContent = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()

  return <div className={classes.root}>
    <div className="container mt-5 mb-5">
      {children}
      </div>
    </div>
}

MaterialContent.propTypes = {
  children: PropTypes.node,
}
