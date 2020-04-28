/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Layout } from '../components/Layout'

import Swiper from 'react-id-swiper'

// import cruze from '../public/images/cruze.jpeg'
// import chevy from '../public/images/chevy.jpeg'
const HeroSliderConfigs = {
    containerClass: 'swiper-container hero-slider',
    parallax: true,
    loop: true,
    centeredSlides: true,
    speed: 1000,
    spaceBetween: 0,
    effect: 'slide',
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },
    navigation: {
      nextEl: '.swiper-button-next.swiper-button-white',
      prevEl: '.swiper-button-prev.swiper-button-white'
    }
}

const SliderPage = ({ isLoading, yourUrl }: { isLoading:boolean, yourUrl:string }) => {
  const title = 'SliderPage page'
  const description = 'SliderPage description'
  const [parallaxSwiper, setParallaxSwiper] = useState<null | {width:number}>(null)
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width*0.95 : 0 
  const parallaxOpacity = 0.5
  
  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
    >
        <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
          {/* 1 */}
            <div className="hero-slide">
                <div
                  className="slide-image"
                  data-swiper-parallax={parallaxAmount}
                  data-swiper-parallax-opacity={parallaxOpacity}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1573740701893-c74cda780677?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      alt="race"
                    />
                </div>
                <div className="slide-content">
                  <h1>Racing</h1>                  
                </div>
            </div>
          {/* 2 */}
          <div className="hero-slide">
                <div
                  className="slide-image"
                  data-swiper-parallax={parallaxAmount}
                  data-swiper-parallax-opacity={parallaxOpacity}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1573906648850-d5835ef91e3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                      alt="cruze"
                    />
                </div>
                <div className="slide-content">
                  <h1>Cruze</h1>                  
                </div>
            </div>
          {/* 3 */}
          <div className="hero-slide">
                <div
                  className="slide-image"
                  data-swiper-parallax={parallaxAmount}
                  data-swiper-parallax-opacity={parallaxOpacity}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1571467463071-0ccfb478dc71?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      alt="mbenz"
                    />
                </div>
                <div className="slide-content">
                  <h1>Mercedes</h1>                  
                </div>
            </div>
        </Swiper>
      <style jsx>
        {`
          .hero-slide {
            height: 100vh!important;
            display: flex;
            position: relative;
            overflow: hidden;
          }
          .slide-image {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .slide-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .slide-content {
            width: 100%;
            height: auto;
            margin: auto;
            z-index: 1;
          }
        `}
      </style>
    </Layout>
  )
}

SliderPage.getInitialProps = async () => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1500)
  // })

  return {}
}
SliderPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  yourUrl: PropTypes.string.isRequired,
}
export default SliderPage