import { Layout } from "../../components/Layout"
import { MaterialContent } from "../../UI/Molecules/MaterialContent"
import { NextPageContext } from "next"
import { useRouter } from "next/router"
import Link from "next/link"

type showType = {
  name: string
  about: string
}

export default function Person({ isLoading, show }: {isLoading:boolean, show:showType}) {
    const title = `Person page`
    const description = 'A Person page description'
    const imgUrl = "https://images.unsplash.com/photo-1474408886716-087263db7da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
    const router = useRouter()
    const { id } = router.query  
    return (
        <Layout title={title} description={description} imgUrl={imgUrl} isLoading={isLoading}>
            <MaterialContent>
            <h3>Статья { id } - {show.name}</h3>
            <p className="color-heading text-adaptive">{show.about}</p>
            <Link href="/people" as={`/people`}>
                <a>
                  Назад
                </a>
            </Link>
            </MaterialContent>
        </Layout>
    )
}

export async function getServerSideProps(context: {query:{id:number}}) {
  console.log(context.query.id)
  const res = await fetch(`https://underproof-strapi.herokuapp.com/people/${context.query.id}`)
  const show = await res.json()
  console.log(show)
  return {
    props: { show }
  };
}