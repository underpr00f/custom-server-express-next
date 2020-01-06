import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from '../components/Layout'

const B = ({ isLoading, yourUrl }) => {
  const title = 'B page'
  const description = 'B description'
  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
    >
      <div>BBBB</div>
    </Layout>
  )
}

B.getInitialProps = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500)
  })

  return {}
}
B.propTypes = {
  isLoading: PropTypes.bool,
  yourUrl: PropTypes.string,
}
export default B
