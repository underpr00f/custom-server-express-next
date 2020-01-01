import React from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout'

const Home = () => {

  const title = "Welcome to Next.js"
  const description = "Next description Next description Next description Next description "

  return (
    <Layout
      title={title}
      description={description}
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
          <Link href={{ pathname: '/posts', query: { id: '2' } }} as="/posts/2" prefetch={false}>
            <a>post #2</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Home
