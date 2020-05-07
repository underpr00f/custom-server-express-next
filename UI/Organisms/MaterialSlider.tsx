import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .hero-slide': {
        height: '100vh!important',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
    },
    '& .slide-image': {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '& .slide-image img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    '& .slide-content': {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        zIndex: 1,
    },
    '& .slide-content .banner-content': {
        width: '100%',
        margin: 'auto',
        '& h1': {
            lineHeight: 2,
        }
    },
    '& .skeleton': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      border: '3px solid #fff',
      backgroundColor: '#cccccc',
    },
  },
}))

export const MaterialSlider = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()

  return <div className={classes.root}>
      {children}
    </div>
}

MaterialSlider.propTypes = {
  children: PropTypes.node,
}
