import Head from 'next/head'
import Layout from '../Components/Layout'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-phone-input-2/lib/style.css'


function MyApp({ Component, pageProps }) {
  
  return (
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
  )
}

export default MyApp
