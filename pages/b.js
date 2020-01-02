import React from 'react'
import { Layout } from '../components/Layout'
import PropTypes from 'prop-types'

const B = ({ isLoading }) => {
  const title = 'B page'
  const description = 'B description'
  return (
    <Layout title={title} description={description} isLoading={isLoading}>
      <div>BBBB</div>
    </Layout>
  )
}

B.getInitialProps = async function() {
  await new Promise(resolve => {
    setTimeout(resolve, 1500)
  })

  return {}
}
B.propTypes = {
  isLoading: PropTypes.bool,
}
export default B
