import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5em 0',
    "& .works-item": {
        textAlign: 'center',
    },
    '& h2': {
        lineHeight: '1em',
        margin: '0 0 1em',
    },
    '& img': {
      width: '100%',
    },
    '& .skeleton': {
      width: '100%',
      height: '100%',
      backgroundColor: '#e2e2e2',
    },
  },
}))

export const MaterialWorks = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

MaterialWorks.propTypes = {
  children: PropTypes.node,
}
