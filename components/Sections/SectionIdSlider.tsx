/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

import Swiper from 'react-id-swiper'
import { MaterialSlider } from '../../UI/Organisms/MaterialSlider'
import { sliderArray } from '../../constants/constants'

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

const SectionIdSlider = () => {
  const title = 'SectionIdSlider page'
  const description = 'SectionIdSlider description'
  const [parallaxSwiper, setParallaxSwiper] = useState<null | {width:number}>(null)
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width*0.95 : 0 
  const parallaxOpacity = 0.5
  
  return (
      <>
        <MaterialSlider>
            <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
                {sliderArray.map((sliderElement, index) => (
                    <div className="hero-slide" key={index}>
                        <div
                        className="slide-image"
                        data-swiper-parallax={parallaxAmount}
                        data-swiper-parallax-opacity={parallaxOpacity}
                        >
                            <img
                            src={sliderElement.imgUrl}
                            alt={sliderElement.text}
                            />
                        </div>
                        <div className="slide-content">
                            <div className="banner-content">
                                <h1>{sliderElement.text}</h1>
                                <h4>{sliderElement.description}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </Swiper>
          </MaterialSlider>
        </>
  )
}

SectionIdSlider.getInitialProps = async () => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1500)
  // })

  return {}
}
// SectionIdSlider.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   yourUrl: PropTypes.string.isRequired,
// }
export default SectionIdSlider