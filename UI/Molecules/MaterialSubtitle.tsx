import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      '& h4': {
        width:'50%',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& h4': {
        width:'100%',
        textAlign:'center',
      },
    }
  },
}))

export const MaterialSubtitle = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

MaterialSubtitle.propTypes = {
  children: PropTypes.node,
}
