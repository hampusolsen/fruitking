import App from 'next/app'
import CMS from '../cms'
import Layout from '../components/Layout'
import UserProvider from '../contexts/user'
import NotificationProvider from '../middlewares/Notification'
import '../styles/globals.css'
import '../styles/util.css'
import '../styles/variables.css'

export default function MyApp ({ Component, pageProps, categories }) {
  return (
    <UserProvider>
      <NotificationProvider>
        <Layout categories={categories}>
          <Component {...pageProps} />
        </Layout>
      </NotificationProvider>
    </UserProvider>
  )
}

MyApp.getInitialProps = async (applicationContext) => {
  const categories = await CMS.categories()
  const appProps = await App.getInitialProps(applicationContext)

  appProps.categories = categories

  return { ...appProps }
}
