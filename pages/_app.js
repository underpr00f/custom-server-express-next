/* eslint-disable */
import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import Loader from '../components/Loader'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../UI/Theme/theme'

export default class MyApp extends App {
  state = { isLoading: false }

  componentDidMount() {
    // Logging to prove _app.js only mounts once,
    // but initializing router events here will also accomplishes
    // goal of setting state on route change

    Router.events.on('routeChangeStart', url => {
      console.log(`Loading: ${url}`)
      this.setState({ isLoading: true })
    })
    Router.events.on('routeChangeComplete', () => {
      this.setState({ isLoading: false })
    })
    Router.events.on('routeChangeError', () => {
      this.setState({ isLoading: false })
    })
  }
  render() {
    const { Component, pageProps } = this.props
    const { isLoading } = this.state

    return (
      <>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} isLoading={isLoading} />
        </ThemeProvider>
        {isLoading && <Loader />}
      </>
    )
  }
}
