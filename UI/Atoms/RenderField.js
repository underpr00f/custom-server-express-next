import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

export const RenderField = ({
  validationType,
  nameType,
  shortName,
  errors,
}) => {
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label={`Input ${shortName}`}
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
