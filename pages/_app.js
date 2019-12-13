import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import Router from 'next/router'
import Head from 'next/head'
import Loader from "../components/Loader";


export default class MyApp extends App {
    state = { isLoading: false }

    componentDidMount() {
      // Logging to prove _app.js only mounts once,
      // but initializing router events here will also accomplishes
      // goal of setting state on route change
      console.log('MOUNT');
  
      Router.events.on('routeChangeStart', url => {
        console.log(`Loading: ${url}`)
        this.setState({ isLoading: true });
      })
      Router.events.on('routeChangeComplete', () => {
        this.setState({ isLoading: false });
      })
      Router.events.on('routeChangeError', () => {
        this.setState({ isLoading: false });
      })
    }
    render() {
    const { Component, pageProps } = this.props
    const { isLoading } = this.state;
    console.log(isLoading);
    return (
      <>
        <Component {...pageProps} isLoading={isLoading}/>
        {isLoading && <Loader />}
      </>
    )
  }
}
