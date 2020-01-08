/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import { Layout } from '../components/Layout'

const About = ({ isLoading, shows, yourUrl }) => {
  const title = 'About page'
  const description = 'About description'

  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
    >
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link
              href={{ pathname: '/posts', query: { id: `${show.id}` } }}
              as={`/posts/${show.id}`}
            >
              <a>
                {show.name} post #{show.id}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      {/* <style jsx>
        {`
          h1 {
            color: yellow;
          }
        `}
      </style> */}
    </Layout>
  )
}

About.getInitialProps = async () => {
  // await new Promise(resolve => {
  //     setTimeout(resolve, 1500)
  // })
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map((entry) => entry.show),
  }
}
About.propTypes = {
  isLoading: PropTypes.bool,
  yourUrl: PropTypes.string,
  shows: PropTypes.array,
}
export default About
