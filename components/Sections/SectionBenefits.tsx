import React from 'react'
import PropTypes from 'prop-types'
import { BusinessCenterImg, DirectionsCarImg, SettingsApplicationsImg } from '../../UI/Atoms/icons'
import { MaterialBenefits } from '../../UI/Molecules/MaterialBenefits'

// import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';

const SectionBenefits = (
    // { title, description }:{ title:string, description:string }
    ) => {
  return (
    <MaterialBenefits>
      <section className="benefits">
      <div className="container">
          <h2>Достижения</h2>
          <div className="row justify-content-center">
              <div className="col-md-4 mb-50 benefits-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="400">
              <BusinessCenterImg />
              <h5 className="mt-20 mb-25 f-22 title">Many Useful <br />Components</h5>
              <div className="color-heading text-adaptive">
                  Startup Framework contains 
                  components and complex blocks 
                  which can easily be integrated <br />
                  into almost any design.  
              </div>
              </div>
              <div className="col-md-4 mb-50 benefits-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="800">
              <DirectionsCarImg />
              <h5 className="mt-20 mb-25 f-22 title">Responsive <br />Layout</h5>
              <div className="color-heading text-adaptive">
                  We haven’t forgotten about 
                  responsive layout. With Startup 
                  Framework, you can create a 
                  website with full mobile support. 
              </div>
              </div>
              <div className="col-md-4 mb-50 benefits-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="1200">
              <SettingsApplicationsImg />
              <h5 className="mt-20 mb-25 f-22 title">Retina <br />Ready</h5>
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
  </MaterialBenefits>

  )
}

// SectionBenefits.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

export default SectionBenefits
