import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core';
import { ClickAwayListener } from '@material-ui/core'

type ControlSliderButtonType = {
  isLeft:boolean,
}
export const ControlSliderButton = ({ isLeft }: ControlSliderButtonType) => {
  return (
    <IconButton color="primary" aria-label={isLeft?'prev-slide':'next-slide'}>
        {isLeft 
        ? <ArrowBackIosIcon />
        : <ArrowForwardIosIcon />}
    </IconButton>
  )
}
ControlSliderButton.propTypes = {
  isLeft: PropTypes.bool,
}
