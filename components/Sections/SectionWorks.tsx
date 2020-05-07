import React from 'react'
import PropTypes from 'prop-types'
import { WorkImg } from '../../UI/Atoms/WorkImg'
import { MaterialWorks } from '../../UI/Molecules/MaterialWorks'
import LazyImage from '../LazyImage'


const SectionWorks = (
    // { title, description }:{ title:string, description:string }
    ) => {
  return (
    <MaterialWorks>
    <section className="works">
    <div className="container">
        <h2>Посмотрите наши работы</h2>
        <div className="row justify-content-center">
            <div className="col-md-4 mb-50 works-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="400">
            <WorkImg 
              title={"Buick"}
              image={'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=859&q=80'}/>
            <div className="color-heading text-adaptive">
                Startup Framework contains 
                components and complex blocks 
                which can easily be integrated <br />
                into almost any design.  
            </div>
            </div>
            <div className="col-md-4 mb-50 works-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="800">
            <WorkImg
              title={"Ford"}
              image={'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=859&q=80'}/>
            <div className="color-heading text-adaptive">
                We haven’t forgotten about 
                responsive layout. With Startup 
                Framework, you can create a 
                website with full mobile support. 
            </div>
            </div>
            <div className="col-md-4 mb-50 works-item" data-aos-duration="800" data-aos="fade-up" data-aos-delay="1200">
            <WorkImg
              title={"Chevy"}
              image={'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=859&q=80'}/>
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
  </MaterialWorks>

  )
}

// SectionBenefits.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

export default SectionWorks
