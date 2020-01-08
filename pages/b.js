/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Layout } from '../components/Layout'
// import ReactPageScroller from '../utils/PageScroller/ReactPageScroller'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const B = ({ isLoading, yourUrl }) => {
  const title = 'B page'
  const description = 'B description'

  // const [currentPage, setCurrentPage] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState(0)
  const myRef1 = useRef(null)
  const myRef2 = useRef(null)
  const myRef3 = useRef(null)
  function logit() {
    if (scrollY && scrollY < window.pageYOffset) {
      if (
        window.pageYOffset > myRef1.current.offsetTop &&
        window.pageYOffset < myRef2.current.offsetTop
      ) {
        setScrollDirection(2)
      } else if (
        window.pageYOffset > myRef2.current.offsetTop &&
        window.pageYOffset < myRef3.current.offsetTop
      ) {
        setScrollDirection(3)
      }
    } else if (scrollY && scrollY > window.pageYOffset) {
      if (
        window.pageYOffset > myRef1.current.offsetTop &&
        window.pageYOffset < myRef2.current.offsetTop
      ) {
        setScrollDirection(1)
      } else if (
        window.pageYOffset > myRef2.current.offsetTop &&
        window.pageYOffset < myRef3.current.offsetTop
      ) {
        setScrollDirection(2)
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
    // console.log(scrollDirection)
    // console.log(
    //   scrollY,
    //   myRef1.current.offsetTop,
    //   myRef2.current.offsetTop,
    //   myRef3.current.offsetTop,
    // )
    if (scrollDirection === 1) {
      scrollToRef(myRef1)
    } else if (scrollDirection === 2) {
      scrollToRef(myRef2)
    } else if (scrollDirection === 3) {
      scrollToRef(myRef3)
    }
    // scrollToRef(myRef3)
    return () => {}
  }, [scrollDirection])

  // const handlePageChange = (number) => {
  //   setCurrentPage(number) // set currentPage number, to reset it from the previous selected.
  // }

  // const getPagesNumbers = () => {
  //   const pageNumbers = []

  //   for (let i = 1; i <= 3; i++) {
  //     pageNumbers.push(
  //       // eslint-disable-next-line jsx-a11y/anchor-is-valid
  //       <a role="button" key={i} eventKey={i - 1} onSelect={handlePageChange}>
  //         {i}
  //       </a>,
  //     )
  //   }

  //   return [...pageNumbers]
  // }
  // console.log(getPagesNumbers)
  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
    >
      <section id="section-one" ref={myRef1}>
        <h1>section-one</h1>
      </section>
      <section id="section-two" ref={myRef2}>
        <h1>section-two</h1>
      </section>
      <section id="section-three" ref={myRef3}>
        <h1>section-three</h1>
      </section>
      <style jsx>
        {`
          section {
            background-color: rgba(156, 25, 25, 0.87);
            height: 100vh;
          }
          #section-one {
            // height: calc(100vh - 65px);
          }
          section:nth-child(even) {
            background-color: white;
          }
          #section-three {
            height: 1000px;
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
