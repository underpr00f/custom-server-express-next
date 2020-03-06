/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Layout } from '../components/Layout'
// import ReactPageScroller from '../utils/PageScroller/ReactPageScroller'
type refType = {
  current: {offsetTop: number}
}
const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)

const B = ({ isLoading, yourUrl }: { isLoading:boolean, yourUrl:string }) => {
  const title = 'B page'
  const description = 'B description'
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState(0)
  const myRef1 = useRef<HTMLDivElement>(null)
  const myRef2 = useRef<HTMLDivElement>(null)
  const myRef3 = useRef<HTMLDivElement>(null)
  function logit() {
    if (scrollY && scrollY > window.pageYOffset) {
      if (null !== myRef1.current &&
        null !== myRef2.current &&
        window.pageYOffset > myRef1.current.offsetTop &&
        window.pageYOffset < myRef2.current.offsetTop
      ) {
        setScrollDirection(1)
      } else if (
        null !== myRef2.current &&
        null !== myRef3.current &&
        window.pageYOffset > myRef2.current.offsetTop &&
        window.pageYOffset < myRef3.current.offsetTop
      ) {
        setScrollDirection(2)
      }
    } else if (scrollY && scrollY < window.pageYOffset) {
      if (
        null !== myRef1.current &&
        null !== myRef2.current &&
        window.pageYOffset > myRef1.current.offsetTop &&
        window.pageYOffset < myRef2.current.offsetTop
      ) {
        setScrollDirection(2)
      } else if (
        null !== myRef2.current &&
        null !== myRef3.current &&
        window.pageYOffset > myRef2.current.offsetTop &&
        window.pageYOffset < myRef3.current.offsetTop
      ) {
        setScrollDirection(3)
      }
    }
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit)
    }
    watchScroll()

    return () => {
      window.removeEventListener('scroll', logit)
    }
  })

  // TouchMove preparing
  function touchMove() {
    console.log('touching')
  }
  useEffect(() => {
    window.addEventListener('touchmove', touchMove)
    return () => {
      window.removeEventListener('touchmove', touchMove)
    }
  })
  // useEffect(() => {
  //   window.onscroll = function() {
  //     // print "false" if direction is down and "true" if up
  //     setScrollPosition(this.oldScroll > this.scrollY)
  //     this.oldScroll = this.scrollY
  //   }
  //   return () => {}
  // })
  // On change scroll direction
  useEffect(() => {
    if (scrollDirection === 1) {
      scrollToRef(myRef1)
    } else if (scrollDirection === 2) {
      scrollToRef(myRef2)
    } else if (scrollDirection === 3) {
      scrollToRef(myRef3)
    }

    return () => {}
  }, [scrollDirection])

  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
    >
      <section id="section-one" ref={myRef1}>
        <h1>Cruze</h1>
        <img src="/images/cruze.jpeg" alt="cruze" />
      </section>
      <section id="section-two" ref={myRef2}>
        <h1>Chevy</h1>
        <img src="/images/chevy.jpeg" alt="chevy" />
      </section>
      <section id="section-three" ref={myRef3}>
        <h1>corvette</h1>
        <img
          src="https://images.unsplash.com/photo-1583156862930-822782625bb4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          alt="corvette"
        />
      </section>
      <style jsx>
        {`
          section {
            background-color: #fff;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100vh;
            position: relative;
          }
          section h1 {
            text-align: center;
            position: absolute;
          }
          section img {
            object-fit: cover;
            height: 100vh;
            width: 100%;
          }
          #section-one {
          }
          section:nth-child(even) {
          }
          #section-three {
            height: 2000px;
          }
          #section-three img {
            object-fit: cover;
            height: 2000px;
          }
        `}
      </style>
    </Layout>
  )
}

B.getInitialProps = async () => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1500)
  // })

  return {}
}
B.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  yourUrl: PropTypes.string.isRequired,
}
export default B
