import '../styles/styles.css'
import { DesafiosProvider } from '../contextos/DesafiosContexto';
import { ContadorProvider } from '../contextos/ContadorContexto';

function MyApp({ Component, pageProps }) {
  
  return (
          <Component {...pageProps} />
  )
}

export default MyApp
