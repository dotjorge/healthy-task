import '../styles/styles.css'
import { DesafiosProvider } from '../contextos/DesafiosContexto';
import { ContadorProvider } from '../contextos/ContadorContexto';

function MyApp({ Component, pageProps }) {
  
  return (
    <DesafiosProvider>
      <ContadorProvider>
          <Component {...pageProps} />
      </ContadorProvider>
    </DesafiosProvider>
  )
}

export default MyApp
