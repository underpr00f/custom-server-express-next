/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import { Layout } from '../components/Layout'
import { MaterialLink } from '../UI/Atoms/MaterialLink'
import SectionSubtitle from '../components/Sections/SectionSubtitle'
import { MaterialAbout } from '../UI/Molecules/MaterialAbout'

type showType = {
  id: number,
  name: string
}
type entryType = {
  show: showType
}
const About = ({ isLoading, shows, yourUrl }: { isLoading:boolean, shows: Array<showType>, yourUrl:string }) => {
  const title = 'Batman TV Shows'
  const description = 'Batman TV Shows list choose to check'
  const imgUrl = "https://images.unsplash.com/photo-1498252992631-9380b51a1baf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
      imgUrl={imgUrl}
    >
      <MaterialAbout>
        <h3>Почитать статьи: </h3>
        <ul>
          {shows.map((show) => (
            <li key={show.id}>
              <Link
                href={{ pathname: '/posts', query: { id: `${show.id}` } }}
                as={`/posts/${show.id}`}
              >              
                  <a>
                    {show.name}
                  </a>
              </Link>
            </li>
          ))}
        </ul>
      </MaterialAbout>
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
  console.log("Hello")
  return {
    shows: data.map((entry:entryType) => entry.show),
  }
}
About.propTypes = {
  isLoading: PropTypes.bool,
  yourUrl: PropTypes.string,
  shows: PropTypes.array,
}
export default About
