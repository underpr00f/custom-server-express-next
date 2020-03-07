import React from 'react'
import PropTypes from 'prop-types'

const SectionTitle = ({ title, description }:{ title:string, description:string }) => {
  return (
      <section className="title">
        <div className="title-container">
          <div className="container">
            <h1>{title}</h1>
            <h4>{description}</h4>
          </div>
        </div>
      </section>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default SectionTitle
