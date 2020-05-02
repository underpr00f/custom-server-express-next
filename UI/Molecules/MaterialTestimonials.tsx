import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3em 0 2em',
    backgroundColor: `${theme.palette.primary.main}`,
    '& h2': {
      color: '#fff',
    },
    '& .testimonials-slide': {
        height: 'auto!important',
        display: 'flex',
        flexDirection: 'column',
        // position: 'relative',
        overflow: 'hidden',
    },
    '& .testimonials-item': {
       padding: '0 3rem',
    },
    '& .testimonials-top': {
      // height: 'auto!important',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // flexDirection: 'column',
      // position: 'relative',
      // overflow: 'hidden',
      margin:'1rem 0',
  },
    '& .slide-image': {
        height: '80px',
        width: '80px',
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        margin: 0,
        // marginLeft: '-1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '& h4': {
        marginLeft: '1rem',
        width: '50%',
    },
    '& .slide-image img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%',
        border: '3px solid #fff',
    },
    '& .slide-content': {
        width: '100%',
        height: 'auto',
        margin: 0,
        zIndex: 1,
    },
    '& .slide-content .banner-content': {
        width: '100%',
        margin: 'auto',
        '& h1': {
            lineHeight: 2,
        }
    },
    '& p': {
      color: "#fff",
    },
  },
}))

export const MaterialTestimonials = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()

  return <div className={classes.root}>
      {children}
    </div>
}

MaterialTestimonials.propTypes = {
  children: PropTypes.node,
}
