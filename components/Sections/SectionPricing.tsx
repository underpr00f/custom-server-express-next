import React from 'react'
import PropTypes from 'prop-types'
import { ThumbUpImg, InsertEmoticonIconImg, BusinessIconImg } from '../../UI/Atoms/icons'
import { MaterialLink } from '../../UI/Atoms/MaterialLink'
import { MaterialPricing } from '../../UI/Molecules/MaterialPricing'

// import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';

const SectionPricing = (
    // { title, description }:{ title:string, description:string }
    ) => {
        const buttonText = "Подробнее"
        const subtitleLink = "/"
  return (
    <MaterialPricing>
      <section className="benefits">
      <div className="container">
          <h2>Цена на услуги</h2>
          <div className="row justify-content-center text-center">
              <div className="col-md-4 mb-50 px-5 pricing-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="400">
              <ThumbUpImg />
              <h5 className="mt-20 mb-25 f-22 title">Бесплатный</h5>
              <h6 className="mt-20 mb-25 f-22 title">$0/месяц</h6>
              <MaterialLink 
                text={buttonText} 
                type={'button'} 
                color={'secondary'}
                url={subtitleLink}
              />
              <div className="color-heading text-adaptive">
                  Startup Framework contains 
                  components and complex blocks 
                  which can easily be integrated <br />
                  into almost any design.  
              </div>
              </div>
              <div className="col-md-4 mb-50 px-5 pricing-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="800">
              <InsertEmoticonIconImg />
              <h5 className="mt-20 mb-25 f-22 title">Базовый</h5>
              <h6 className="mt-20 mb-25 f-22 title">$9.99/месяц</h6>
              <MaterialLink 
                text={buttonText} 
                type={'button'} 
                color={'secondary'}
                url={subtitleLink}
              />
              <div className="color-heading text-adaptive">
                  We haven’t forgotten about 
                  responsive layout. With Startup 
                  Framework, you can create a 
                  website with full mobile support. 
              </div>
              </div>
              <div className="col-md-4 mb-50 px-5 pricing-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="1200">
              <BusinessIconImg />
              <h5 className="mt-20 mb-25 f-22 title">Премиум</h5>
              <h6 className="mt-20 mb-25 f-22 title">$19.99/месяц</h6>
              <MaterialLink 
                text={buttonText} 
                type={'button'} 
                color={'secondary'}
                url={subtitleLink}
              />
              <div className="color-heading text-adaptive">
                  Startup Framework works on
                  devices supporting Retina
                  Display. Feel the clarity in each
                  pixel. 
              </div>
              </div>
        </div>
      </div>
    </section>
  </MaterialPricing>

  )
}

// SectionPricing.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

export default SectionPricing
