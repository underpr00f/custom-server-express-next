import React from 'react'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'

import { Layout } from '../components/Layout'

const LazyImage = dynamic(() => import('../components/LazyImage'), {
  loading: () => <p>Loading....</p>,
})

export const Posts = ({ isLoading, show }) => {
  const title = `${show.name} page`
  const description = 'A description'
  return (
    <Layout title={title} description={description} isLoading={isLoading}>
      <div>
        <h1>{show.name}</h1>
        {show.image && show.image.medium && (
          <LazyImage title={show.name} image={show.image.medium} />
        )}
        <p>{show.summary && show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      </div>
    </Layout>
  )
}

Posts.getInitialProps = async (context) => {
  const { id } = context.query
  console.log('ctx', id)
  await new Promise((resolve) => {
    setTimeout(resolve, 1500)
  })

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return {
    show,
  }
}
Posts.propTypes = {
  isLoading: PropTypes.bool,
  show: PropTypes.object,
  yourUrl: PropTypes.string,
}
export default Posts
