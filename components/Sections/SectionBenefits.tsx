import React from 'react'
import PropTypes from 'prop-types'

import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';

const SectionBenefits = (
    // { title, description }:{ title:string, description:string }
    ) => {
  return (
    <section className="benefits">
    <div className="container">
        <h2>My Benefits</h2>
        <div className="row justify-content-center">
            <div className="col-md-4 mb-50 benefits-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="400">
            <BusinessCenterOutlinedIcon style={{fontSize: '60px'}} />
            <h4 className="mt-20 mb-25 f-22 title">Many Useful <br />Components</h4>
            <div className="color-heading text-adaptive">
                Startup Framework contains 
                components and complex blocks 
                which can easily be integrated <br />
                into almost any design.  
            </div>
            </div>
            <div className="col-md-4 mb-50 benefits-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="800">
            <BusinessCenterOutlinedIcon style={{fontSize: '60px'}} />
            <h4 className="mt-20 mb-25 f-22 title">Responsive <br />Layout</h4>
            <div className="color-heading text-adaptive">
                We haven’t forgotten about 
                responsive layout. With Startup 
                Framework, you can create a 
                website with full mobile support. 
            </div>
            </div>
            <div className="col-md-4 mb-50 benefits-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="1200">
            <BusinessCenterOutlinedIcon style={{fontSize: '60px'}} />
            <h4 className="mt-20 mb-25 f-22 title">Retina <br />Ready</h4>
            <div className="color-heading text-adaptive">
                Startup Framework works on <br />
                devices supporting Retina <br />
                Display. Feel the clarity in each <br />
                pixel. 
            </div>
            </div>
      </div>
    </div>
    <style jsx>
        {`
          .benefits {
              margin-bottom: 5em;
          }
          .benefits-item{
            text-align: center;
          }
        `}
      </style>
  </section>

  )
}

// SectionBenefits.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

export default SectionBenefits
