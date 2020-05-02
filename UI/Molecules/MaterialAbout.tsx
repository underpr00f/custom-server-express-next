import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '3em 0 10em',
    '& h3': {
        fontSize: '44px',
        lineHeight: '46px',
        letterSpacing: '-.5',
        marginBottom: '1em',
      },
    '& ul': {
        display: 'grid',
        // gridTemplateColumns: "repeat(auto-fill, minmax(260px, max-content))",
        gridGap: '1em 2em',
        fontSize: '18px',
        lineHeight: '26px',
        textAlign: 'left',
    },
    '& a': {
      // whiteSpace: 'nowrap',
    },
  },
}))

export const MaterialAbout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()

  return <div className={classes.root}>
    <div className="container mt-5 mb-5">
      {children}
      </div>
    </div>
}

MaterialAbout.propTypes = {
  children: PropTypes.node,
}
