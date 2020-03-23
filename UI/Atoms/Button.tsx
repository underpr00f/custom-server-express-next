import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

type CustomButtonType = {
  text:string,
  type?: 'submit' | 'reset' | 'button',
  variant?: 'text' | 'outlined' | 'contained',
  color?: "inherit" | "default" | "primary" | "secondary"
}
export const CustomButton = ({ text, type, variant, color }: CustomButtonType) => {
  return (
    <Button type={type || 'button'} variant={variant || 'contained'} color={color || 'primary'}>
      {text}
    </Button>
  )
}
CustomButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
}
