import SiteLayout from '../components/SiteLayout'
import ModalProvider from '../contexts/modal'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ModalProvider>
  )
}

export default MyApp
