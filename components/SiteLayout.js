import Head from 'next/head';
import SiteHeader from './modules/SiteHeader/';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Fruit King</title>
        <link rel="icon" href="/apple.ico" />
      </Head>
      <SiteHeader />
      {children}
    </div>
  )
}