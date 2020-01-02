import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export const CustomButton = ({ text, type }) => {
  return (
      <Button
        type={ type ? type : 'button' }
        variant="contained"
        color="primary">
          {text}
      </Button>
  )
} 

CustomButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
};
