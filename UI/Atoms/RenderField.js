import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';

export const RenderField = ({ validationType, nameType, shortName, errors }) => {
  return (
      <>
          <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label={ 'Input ' + shortName }
        name={ nameType }
        autoComplete={ shortName }
        autoFocus
        inputRef={ validationType }
        error={ !!errors[ nameType ] }
        helperText={ errors[ nameType ] ?
          errors[ nameType ].type === 'required' ?
            'This field is required'
            : errors[ nameType ].type === 'minLength' ?
              'This field must have more than 3 characters'
              : errors[ nameType ].type === 'validate' ? 'Invalid email address' : ''
          : ''
        }
      />
      </>
  )
} 

RenderField.propTypes = {
  validationType: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.any })
]),
  nameType: PropTypes.string,
  shortName: PropTypes.string,
  errors: PropTypes.object
};