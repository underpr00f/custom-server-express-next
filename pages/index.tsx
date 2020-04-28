/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { Layout } from '../components/Layout'
// import SectionTitle from '../components/Sections/SectionTitle'
import SectionBenefits from '../components/Sections/SectionBenefits'
import SectionSubtitle from '../components/Sections/SectionSubtitle'
import SectionWorks from '../components/Sections/SectionWorks'

const Home = ({ isLoading, yourUrl }: { isLoading:boolean, yourUrl:string }) => {
  const title = 'Добро пожаловать в сервис'
  const description = 'We have created a new NextJS MaterialUI site that will help designers, developers and companies create websites for their startups quickly and easily.'
  const imgUrl = 'https://images.unsplash.com/photo-1516853123998-f89d74dac6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  const subtitleLink = "/"
  const subtitleText = "Стоимость наших работ от 200 руб."
  const buttonText = 'Проверить доступность'
  const [scrollY, setScrollY] = useState(0)
  const withSlider = true

  function logit() {
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

  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
      imgUrl={imgUrl}
      withSlider={withSlider}
    >
      <SectionSubtitle 
        subtitleLink={subtitleLink}
        subtitleText={subtitleText}
        buttonText={buttonText}
      />
      <SectionBenefits />
      <SectionWorks />
      {/* <SectionSlider /> */}
      {/* <div className="container">
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
      </div> */}
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
