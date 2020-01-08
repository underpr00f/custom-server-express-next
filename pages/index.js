/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { Layout } from '../components/Layout'

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// const useMountEffect = (fun) => useEffect(fun, [])
// window.onscroll = function() {
//   // print "false" if direction is down and "true" if up
//   console.log(this.oldScroll > this.scrollY)
//   this.oldScroll = this.scrollY
// }

const Home = ({ isLoading, yourUrl }) => {
  const title = 'Welcome to Next.js'
  const description = 'Next description Next description Next '

  const [scrollY, setScrollY] = useState(0)
  // const [yourSection, setYourSection] = useState(0)
  // const [nextRef, setNextRef] = useState(0)

  // const myRef1 = useRef(null)
  // const myRef2 = useRef(null)
  // const myRef3 = useRef(null)

  function logit() {
    setScrollY(window.pageYOffset)
  }

  // const scrollToRef = () => {
  //   window.onscroll = function() {
  //     // print "false" if direction is down and "true" if up
  //     console.log(this.oldScroll > this.scrollY)
  //     this.oldScroll = this.scrollY
  //   }
  // }
  // const scrollToRef = (yourScroll, yourRef1, yourRef2, yourRef3) => {
  //   console.log(yourScroll, yourRef1, yourRef2)
  //   if (yourScroll > yourRef1 && yourScroll <= yourRef2) {
  //     window.scrollTo(0, yourRef2)
  //   } else if (yourScroll > yourRef2 && yourScroll <= yourRef3) {
  //     window.scrollTo(0, yourRef3)
  //   }
  // }
  // const showRef = (ref, nextRef) => {
  //   window.scrollTo(0, nextRef)
  // }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit)
    }

    watchScroll()

    // scrollToRef()
    // scrollToRef(
    //   scrollY,
    //   myRef1.current.offsetTop,
    //   myRef2.current.offsetTop,
    //   myRef3.current.offsetTop,
    // )
    // console.log(
    //   myRef1.current && myRef1.current.offsetTop,
    //   scrollY,
    //   myRef2.current && myRef2.current.offsetTop,
    // )
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener('scroll', logit)
    }
  })
  // const getRef = (e) => {
  //   console.log(e.offSetTop)
  //   if (scrollY > e.offSetTop) {
  //     console.log(scrollY, e.offSetTop)
  //   }
  // }
  // useMountEffect(() => scrollToNextRef(myRef)) // Scroll on mount
  console.log(scrollY)
  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
    >
      <h1>{title}</h1>
      <h4>{description}</h4>
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
      <style jsx>
        {`
          section {
            background-color: rgba(156, 25, 25, 0.87);
            height: 100vh;
          }
          #section-one {
            height: calc(100vh - 65px);
          }
          section:nth-child(odd) {
            background-color: white;
          }
        `}
      </style>
    </Layout>
  )
}
Home.propTypes = {
  isLoading: PropTypes.bool,
  yourUrl: PropTypes.string,
}
export default Home
