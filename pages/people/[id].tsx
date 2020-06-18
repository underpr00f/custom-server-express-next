import { Layout } from "../../components/Layout"
import { MaterialContent } from "../../UI/Molecules/MaterialContent"
import { useRouter } from "next/router"
import Link from "next/link"
import Error from '../_error'
import { errorChecker } from "../../utils/FetchHelper"

type showType = {
  name: string
  about: string
}
type errorType = {
  errorCode: number
  errorMessage: string
}
export default function Person(
  { isLoading, show: {name, about}, error: {errorCode, errorMessage} }
  : {isLoading:boolean, show:showType, error:errorType}
  ) {
    if (errorCode) {
      return <Error statusCode={errorCode} statusMessage={errorMessage} isLoading={isLoading}/>
    }
    const title = `Person page`
    const description = 'A Person page description'
    const imgUrl = "https://images.unsplash.com/photo-1474408886716-087263db7da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
    const router = useRouter()
    const { id } = router.query  
    console.log(errorCode)
    return (
        <Layout title={title} description={description} imgUrl={imgUrl} isLoading={isLoading}>
            <MaterialContent>
            <h3>Статья { id } - {name}</h3>
            <p className="color-heading text-adaptive">{about}</p>
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
  const res = await fetch(`https://underproof-strapi.herokuapp.com/people/${context.query.id}`)

  const show = await errorChecker(res)
  return show
}