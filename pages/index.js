/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Layout } from '../components/Layout'

const Home = ({ isLoading, yourUrl }) => {
  const title = 'Welcome to Next.js'
  const description = 'Next description Next description Next '

  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
    >
      <ul>
        <li>
          <Link href="/contact" as="/contact" prefetch={false}>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/b" as="/b" prefetch={false}>
            <a>B</a>
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: '/posts', query: { id: '2' } }}
            as="/posts/2"
            prefetch={false}
          >
            <a>post #2</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
Home.propTypes = {
  isLoading: PropTypes.bool,
  yourUrl: PropTypes.string,
}
export default Home
