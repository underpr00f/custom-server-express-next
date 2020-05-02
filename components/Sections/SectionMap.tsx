import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { YandexMap } from '../YandexMap'
import { MaterialMap } from '../../UI/Molecules/MaterialMap'

const SectionMap = (

) => {
  const [title, setTitle] = useState<null|string>(null)
  useEffect(() => {
    setTitle('Мы на карте')
  },[]);
  return (    
    <MaterialMap>
      <section className="yandexmap">
        {title && <h2>{title}</h2> }
        <YandexMap />
      </section>
    </MaterialMap>
  )
}

// SectionTitle.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

export default SectionMap
