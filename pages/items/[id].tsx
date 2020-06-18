import React from 'react'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'

import { Layout } from '../../components/Layout'
import { MaterialContent } from '../../UI/Molecules/MaterialContent';
import { errorChecker } from '../../utils/FetchHelper';
import Error from '../_error'
import { useRouter } from 'next/router'
import SectionSubtitle from '../../components/Sections/SectionSubtitle'

const LazyImage = dynamic(() => import('../../components/LazyImage'), {
  loading: () => <p>Loading....</p>,
})
type showType = {
  name: string
  image?: {medium: string}  
  summary: string
}
type errorType = {
  errorCode: number
  errorMessage: string
}
export default function Item (
  { isLoading, show, error: {errorCode, errorMessage} }
  : { isLoading:boolean, show: showType, error: errorType }) {
  if (errorCode) {
    return <Error statusCode={errorCode} statusMessage={errorMessage} isLoading={isLoading}/>
  }
  const title = `${show.name} page`
  const description = 'A description'
  const imgUrl = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  const subtitleLink = "/items"
  const subtitleText = "Вернуться к списку статей";
  const buttonText = "Список"
  const router = useRouter()
  const { id } = router.query 

  return (
    <Layout title={title} description={description} isLoading={isLoading} imgUrl={show&&show.image?show.image.medium:imgUrl}>
        <SectionSubtitle 
            subtitleLink={subtitleLink}
            subtitleText={subtitleText}
            buttonText={buttonText}
          />
        <MaterialContent>
          <h3>Статья - {show.name}</h3>
          <p className="color-heading text-adaptive">{show.summary && show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        </MaterialContent>
    </Layout>
  )
}
export async function getServerSideProps(context: {query:{id:number}}) {
  const res = await fetch(`https://api.tvmaze.com/shows/${context.query.id}`)
  const show = await errorChecker(res)
  return show
}
// Posts.getInitialProps = async (context: NextPageContext) => {
//   const { id } = context.query
//   console.log('ctx', id)
//   // await new Promise((resolve) => {
//   //   setTimeout(resolve, 1500)
//   // })

//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()

//   console.log(`Fetched show: ${show.name}`)

//   return {
//     show,
//   }
// }
