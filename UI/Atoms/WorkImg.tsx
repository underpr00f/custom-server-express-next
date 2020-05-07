import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  wrap: {
    width:'100%',
    position: 'relative'
  },
  image: {
    width: '100%'
  },
  desc: {
      background: '#fff',
      opacity: '0.6',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      marginBottom: 0
  }
}))

export const WorkImg = ({ image,title }: {image:string, title:string}) => {
  const classes = useStyles()
  
  return (
      <div className={classes.wrap}>
        <img src={image} alt={title} className={classes.image}/>
        <h5 className={classes.desc}>{title}</h5>
      </div>    
  )
}
WorkImg.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}