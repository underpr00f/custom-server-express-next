/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

import Swiper from 'react-id-swiper'
import { testimonialsArray } from '../../constants/constants'
import { MaterialTestimonials } from '../../UI/Molecules/MaterialTestimonials'

// import cruze from '../public/images/cruze.jpeg'
// import chevy from '../public/images/chevy.jpeg'
const TestimonialsSliderConfigs = {
    containerClass: 'swiper-container testimonials-slider',
    // parallax: true,
    slidesPerView: 3,
    loop: true,
    // centeredSlides: true,
    speed: 1000,
    // spaceBetween: 30,
    // effect: 'flip',
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },
    breakpoints: {
        1160: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    navigation: {
      nextEl: '.swiper-button-next.swiper-button-white',
      prevEl: '.swiper-button-prev.swiper-button-white'
    }
}

const SectionTestimonials = () => {
//   const title = 'SectionIdSlider page'
//   const description = 'SectionIdSlider description'
//   const [parallaxSwiper, setParallaxSwiper] = useState<null | {width:number}>(null)
//   const parallaxAmount = parallaxSwiper ? parallaxSwiper.width*0.95 : 0 
//   const parallaxOpacity = 0.5
  
  return (
      <>
        <MaterialTestimonials>
        <section className="testimonials">
            <h2>О нас говорят</h2>
            <Swiper 
              {...TestimonialsSliderConfigs} 
            //   getSwiper={setParallaxSwiper}
              >
                {testimonialsArray.map((sliderElement, index) => (
                    <div className="testimonials-slide" key={index}>
                        <div className="testimonials-item">
                      <div className="testimonials-top">
                        <div
                        className="slide-image"
                        // data-swiper-parallax={parallaxAmount}
                        // data-swiper-parallax-opacity={parallaxOpacity}
                        >
                            <img
                            src={sliderElement.imgUrl}
                            alt={sliderElement.text}
                            />                            
                        </div>
                        <h4>{sliderElement.text}</h4>
                      </div>
                        <div className="slide-content">
                            <div className="testimonial-desc">
                                <p>{sliderElement.description}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
              </Swiper>
            </section>
          </MaterialTestimonials>
        </>
  )
}

SectionTestimonials.getInitialProps = async () => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1500)
  // })

  return {}
}
// SectionTestimonials.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   yourUrl: PropTypes.string.isRequired,
// }
export default SectionTestimonials