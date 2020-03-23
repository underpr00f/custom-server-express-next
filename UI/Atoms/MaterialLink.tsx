import React from "react";
import Link from "next/link";
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

type MaterialLinkType = {
  text: string,
  url: string,
  type?: 'submit' | 'reset' | 'button',
  variant?: 'text' | 'outlined' | 'contained',
  color?: "inherit" | "default" | "primary" | "secondary"
}

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#fff",
    borderRadius: '0',
    '&:hover': {
      // increase the specificity for the pseudo class
      color: '#fff',
    },
  }
}))
export const MaterialLink = ({ text, type, variant, color, url }: MaterialLinkType) => {
  const classes = useStyles()
  return (
    <Link href={url} passHref>
      <Button className={classes.link} type={type || 'button'} variant={variant || 'contained'} color={color || 'primary'}>
        {text}
      </Button>
    </Link>
  )
}
MaterialLink.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
}
