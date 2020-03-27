import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.text.secondary}`,
    [theme.breakpoints.down('xs')]: {
      '& .footer-container': {        
          flexDirection: 'column',
          textAlign: 'center',
        },
      '& .footer-list': {
        marginTop: '20px',
      },
      '& .footer-copyright': {
        flex: 'none'
      }
    },
  }
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
