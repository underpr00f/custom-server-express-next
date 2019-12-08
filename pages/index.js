import React from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout'

const Home = () => {

  const title = "Welcome to Next.js"
  const description = "Check current Bitcoin rate"

  return (
    <Layout
      title={title}
      description={description}
    >
      <ul>
        <li>
          <Link href="/a" as="/a">
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href="/b" as="/b">
            <a>b</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/posts', query: { id: '2' } }} as="/posts/2">
            <a>post #2</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Home
