/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { Layout } from '../components/Layout'

const Home = ({ isLoading, yourUrl }: { isLoading:boolean, yourUrl:string }) => {
  const title = 'Welcome to my Next.js site'
  const description = 'We have created a new NextJS MaterialUI site that will help designers, developers and companies create websites for their startups quickly and easily.'

  const [scrollY, setScrollY] = useState(0)

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
  // console.log(scrollY)
  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
    >
      <section className="title">
        <div className="title-container">
          <div className="container">
            <h1>{title}</h1>
            <h4>{description}</h4>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="container">
            <h2>My Benefits</h2>
            <div className="row justify-content-center">
            <div className="col-md-4 mb-50" data-aos-duration="800" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-briefcase f-60 action-3"></i>						<div className="mt-20 mb-25 f-22 title">Many Useful <br />Components</div>
              <div className="color-heading text-adaptive">
                Startup Framework contains 
                components and complex blocks 
                which can easily be integrated <br />
                into almost any design.  
              </div>
            </div>
            <div className="col-md-4 mb-50" data-aos-duration="800" data-aos="fade-up" data-aos-delay="800">
              <i className="fas fa-compress-arrows-alt f-60 action-3"></i>						<div className="mt-20 mb-25 f-22 title">Responsive <br />Layout</div>
              <div className="color-heading text-adaptive">
                We haven’t forgotten about 
                responsive layout. With Startup 
                Framework, you can create a 
                website with full mobile support. 
              </div>
            </div>
            <div className="col-md-4 mb-50" data-aos-duration="800" data-aos="fade-up" data-aos-delay="1200">
              <i className="fas fa-desktop f-60 action-3"></i>						<div className="mt-20 mb-25 f-22 title">Retina <br />Ready</div>
              <div className="color-heading text-adaptive">
                Startup Framework works on <br />
                devices supporting Retina <br />
                Display. Feel the clarity in each <br />
                pixel. 
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="xs-6">
          <h6>You can visit some pages if you interested</h6>
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
        </div>
      </div>
      <style jsx>
        {`
          .title-container h1{
            margin-bottom: 0.5em;
            padding: 0 40px;
          }
          .title-container h4{
            padding: 0 40px;
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
