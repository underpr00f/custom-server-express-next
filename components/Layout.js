import Head from 'next/head'
import { useEffect } from "react";

import { Navbar } from './Navbar'

// import { YandexMetrika } from '../utils/YandexMetrika'
// import { GoogleAnalitics } from '../utils/GoogleTag'

import { STATIC_URL } from '../constants/constants'

const defaultDescription = "Course bitcoin, example SSR site, react nextjs"
const defaultOGURL = "https://underproof-react-nextjs.netlify.com"
const defaultTitle = "Welcome to Next.js"
const environment = process.env.NODE_ENV


export const Layout = ({
    title,
    isLoading,
    // protocol, 
    // host, 
    // pathname, 
    description,
    children
}) => {
    //   let absoluteUrl = host ? protocol+"//"+host+pathname : defaultOGURL+pathname
    //   useEffect(() => {
    //     if (environment !== "development") {
    //       window.ym(51751819, 'hit', pathname);      
    //     }
    //   }, []);
    let LOADING = isLoading ? "loading" : "";

    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href={`${STATIC_URL}` + "favicon.png"} type="image/png" />
                <link rel="stylesheet"
                    href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
                <meta name="yandex-verification" content="2caec29c5a9588c9" />
                <meta name="description" content={description || defaultDescription} />
                <meta name="keywords"
                    content="netlify, underproof, курс, биткоин, Россия, дизайн, проект, стоимость, цена, некст, nextjs, реакт, reactjs" />

                <meta property="og:type" content="website" />
                <meta name="og:image" content={`${STATIC_URL}` + "images/pyth-django.jpg"} />

                {/* <meta property="og:url" content={absoluteUrl || defaultOGURL} /> */}

                <meta property="og:title" content={title || defaultTitle} />
                <meta name="og:description" content={description || defaultDescription} />
                {/* {environment !== "development" ?
                    <>
                        <YandexMetrika />
                        <GoogleAnalitics />
                    </>
                    : null} */}
            </Head>
            <header className="header">
                <Navbar />
            </header>
            <main id="main" className={`main ${LOADING}`}>
                <div className="container">
                    {children}
                </div>
            </main>
            <style jsx>{`
                main {
                    // transform: rotate(0);
                    opacity: 1;
                    transition: 0.5s;
                }                 
                main.loading {
                    // transform: rotate(15deg);
                    opacity: 0;
                    transition: 0.5s;
                }

            `}</style>
        </div>
    )
}
