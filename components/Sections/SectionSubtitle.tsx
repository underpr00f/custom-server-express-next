import React from 'react'
import PropTypes from 'prop-types'
import { MaterialLink } from '../../UI/Atoms/MaterialLink'
import { MaterialSubtitle } from '../../UI/Molecules/MaterialSubtitle'

const SectionSubtitle= (
  { 
    subtitleLink, subtitleText, buttonText 
  }:{
    subtitleLink:string, subtitleText:string, buttonText:string 
  }) => {
  return (
    <MaterialSubtitle>
      <section className="subtitle">
        <div className="container subtitle-container">            
          <h4>{subtitleText}</h4>
          <MaterialLink 
            text={buttonText} 
            type={'button'} 
            color={'secondary'}
            url={subtitleLink}
          />
        </div>
      </section>
    </MaterialSubtitle>
  )
}

// SectionTitle.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

export default SectionSubtitle
