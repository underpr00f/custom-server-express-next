import React from 'react'
import PropTypes from 'prop-types'

export const LazyImage = ({ title, image }) => {
  return (
    <div>
      <img alt={title} src={image} />
    </div>
  )
}

LazyImage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}
