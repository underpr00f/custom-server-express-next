import React from 'react'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import { NextPageContext } from 'next';

import { Layout } from '../components/Layout'
import { MaterialContent } from '../UI/Molecules/MaterialContent';

const LazyImage = dynamic(() => import('../components/LazyImage'), {
  loading: () => <p>Loading....</p>,
})
type showType = {
  name: string
  image?: {medium: string}  
  summary: string
}

export const Posts = ({ isLoading, show }: { isLoading:boolean, show: showType }) => {
  const title = `${show.name} page`
  const description = 'A description'
  const imgUrl = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"

  return (
    <Layout title={title} description={description} isLoading={isLoading} imgUrl={show&&show.image?show.image.medium:imgUrl}>
        <MaterialContent>
          <h3>Статья - {show.name}</h3>
          <p className="color-heading text-adaptive">{show.summary && show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        </MaterialContent>
    </Layout>
  )
}

Posts.getInitialProps = async (context: NextPageContext) => {
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
