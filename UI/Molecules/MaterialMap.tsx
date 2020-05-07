import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .map-wrapper": {
      height: '400px',
      background: '#c2c2c2',
      "& #map": {
        height: '100%',
      },
      '& .map-title__wrap': {
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `${"url('../images/map.jpg') #c2c2c2 no-repeat"}`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      },
      '& h3': {        
      },
    },
    "& .skeleton": {
      width: '100%',
      height: '400px',
      backgroundColor: '#e2e2e2',
    },
  },
  // {
  //   [theme.breakpoints.down('sm')]: {
  //     '& h4': {
  //       width:'50%',
  //     },
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     '& h4': {
  //       width:'100%',
  //       textAlign:'center',
  //     },
  //   }
  // },
}))

export const MaterialMap = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

MaterialMap.propTypes = {
  children: PropTypes.node,
}
