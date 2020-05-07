import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const LazyImage = ({ title, image, yourClass} : {title?:string, image: string, yourClass?:string}) => {
  return (
      <img alt={title} src={image} className={yourClass?yourClass:""} />
  )
}

export default dynamic(() => Promise.resolve(LazyImage), {
  ssr: false,
  loading: () => <div className="skeleton"></div>,
})