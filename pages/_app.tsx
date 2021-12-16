import Head from 'next/head'
import Layout from '../Components/Layout'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-phone-input-2/lib/style.css'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { createWrapper } from 'next-redux-wrapper'

type AppProps = {
  Component: any,
  pageProps: object
}
function MyApp({ Component, pageProps }: AppProps ) {
  
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>EverestCM</title>
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
      <Layout>
        <div className="contents">
          <Component {...pageProps} />
        </div>
      </Layout>
      </div>
    </Provider>
  )
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
