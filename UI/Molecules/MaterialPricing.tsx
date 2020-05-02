import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '3em 0 5em',
    '& .pricing-item': {
        textAlign: 'center',
        padding: '2em 0',
        '& a': {
            margin: '1em 0',
        },
        '&:hover': {
            backgroundColor: `${theme.palette.primary.main}`,
            '& *': {
                color: '#fff',
            },
        },
    },
    '& h2': {
        lineHeight: '1em',
        margin: '0 0 1em',
    },
  },
}))

export const MaterialPricing = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

MaterialPricing.propTypes = {
  children: PropTypes.node,
}
