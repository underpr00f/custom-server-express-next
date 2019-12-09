import React, { Component } from 'react'
import { Layout } from "../components/Layout"

export default class extends Component {
  static async getInitialProps({ query: { id } }) {
    await new Promise(resolve => {
      setTimeout(resolve, 1500)
    })

    return { postId: id }
  }

  render() {
    const title = "Post #" + this.props.postId + " page"
    const description = "A description"
    const { isLoading } = this.props
    return (
      <Layout
        title={title}
        description={description}
        isLoading={isLoading}
      >
        <div>
          <h1>My blog post #{this.props.postId}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Layout>
    )
  }
}
