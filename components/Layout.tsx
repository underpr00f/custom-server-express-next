import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { MaterialMain } from '../UI/Molecules/MaterialMain'
import { Navbar } from './Navbar'

// import { YandexMetrika } from '../utils/YandexMetrika'
// import { GoogleAnalitics } from '../utils/GoogleTag'

import { STATIC_URL } from '../constants/constants'
import Hero from './Sections/Hero'
import { FooterBar } from './FooterBar'

const defaultDescription = 'Course bitcoin, example SSR site, react nextjs'
// const defaultOGURL = 'https://underproof-react-nextjs.netlify.com'
const defaultTitle = 'Welcome to Next.js'
// const environment = process.env.NODE_ENV

export const Layout = (
{ 
  title,
  isLoading,
  yourUrl,
  imgUrl,
  description,
  children,
}:
{ 
  title:string, 
  description:string,
  isLoading: boolean,
  yourUrl?: string,
  imgUrl?: string,
  children: React.ReactNode
}) => {
  //   let absoluteUrl = host ? protocol+"//"+host+pathname : defaultOGURL+pathname
  //   useEffect(() => {
  //     if (environment !== "development") {
  //       window.ym(51751819, 'hit', pathname);
  //     }
  //   }, []);
  const LOADING = isLoading ? 'loading' : ''

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href={`${STATIC_URL}favicon.png`}
          type="image/png"
        />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
        <meta name="yandex-verification" content="2caec29c5a9588c9" />
        <meta name="description" content={description || defaultDescription} />
        <meta
          name="keywords"
          content="netlify, underproof, курс, биткоин, Россия,
           дизайн, проект, стоимость, цена, некст, nextjs, реакт, reactjs"
        />

        <meta property="og:type" content="website" />
        <meta name="og:image" content={`${STATIC_URL}images/pyth-django.jpg`} />

        {/* <meta property="og:url" content={absoluteUrl || defaultOGURL} /> */}

        <meta property="og:title" content={title || defaultTitle} />
        <meta
          name="og:description"
          content={description || defaultDescription}
        />
        {/* {environment !== "development" ?
                    <>
                        <YandexMetrika />
                        <GoogleAnalitics />
                    </>
                    : null} */}
      </Head>
      <div className={`common ${LOADING}`}>
        <div className="content-wrap">
          <header className="header">
            <Navbar yourUrl={yourUrl} />
            {imgUrl && <Hero imgUrl={imgUrl} title={title} description={description}/>}
          </header>
          <main id="main" >
            <MaterialMain>{children}</MaterialMain>
          </main>
        </div>
        <footer id="footer">
          <FooterBar />
        </footer>
      </div>
      <style jsx>
        {`
          .common {
            opacity: 1;
            transition: 0.5s;
            display: flex;
            flex-direction: column;
            height: 100vh;
          }
          .common.loading {
            opacity: 0;
            transition: 0.5s;
          }
          .content-wrap {
            flex: 1 0 auto;
          }
          #footer {
            flex-shrink: 0;
          }
        `}
      </style>
    </div>
  )
}
Layout.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  yourUrl: PropTypes.string,
  imgUrl: PropTypes.string,
}
