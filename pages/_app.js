import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SSRProvider } from 'react-bootstrap';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
