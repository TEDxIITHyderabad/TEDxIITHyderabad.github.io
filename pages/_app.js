import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SSRProvider } from 'react-bootstrap';
import Layout from '../components/Layout';
import Head from 'next/head';
import { useEffect } from 'react';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SSRProvider>
        {/* <Layout> */}
          <Component {...pageProps} />
        {/* </Layout> */}
      </SSRProvider>
  
    </>
  )
}

export default MyApp
