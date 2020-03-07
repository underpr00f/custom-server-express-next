import React from 'react'
import PropTypes from 'prop-types'

const SectionTitle = ({ title, image }:{ title:string, image:string }) => {
  return (
    <div>
      <img alt={title} src={image} />
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

export default SectionTitle
