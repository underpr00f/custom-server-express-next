import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

type RenderFieldType = {
  validationType: any,
  nameType: string, 
  shortName: string,
  errors: any,
}
const useStyles = makeStyles((theme) => ({
  '@global': {
    'form label': {
      color: '#000'
    }
  }
}))
export const RenderField = ({
  validationType,
  nameType,
  shortName,
  errors,
}: RenderFieldType) => {
  const classes = useStyles()
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label={`Введите ${shortName}`}
        name={nameType}
        autoComplete={shortName}
        autoFocus
        inputRef={validationType}
        error={!!errors[nameType]}
        helperText={(() => {
          if (errors[nameType]) {
            if (errors[nameType].type === 'required') {
              return 'This field is required'
            }
            if (errors[nameType].type === 'minLength') {
              return 'This field must have more than 3 characters'
            }
            if (errors[nameType].type === 'validate') {
              return 'Invalid email address'
            }
          }
          return ''
        })()}
      />
    </>
  )
}

RenderField.propTypes = {
  validationType: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  nameType: PropTypes.string,
  shortName: PropTypes.string,
  errors: PropTypes.object,
}
