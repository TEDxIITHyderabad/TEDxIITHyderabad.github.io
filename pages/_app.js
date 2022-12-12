import '../styles/globals.css'
 import 'bootstrap/dist/css/bootstrap.css'
// import '../styles/font-awesome.min.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
