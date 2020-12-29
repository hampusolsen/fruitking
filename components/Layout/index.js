import Head from 'next/head'
import SiteHeader from '../modules/SiteHeader'
import styles from './Layout.module.css'

export default function SiteLayout ({ children, categories }) {
  return (
    <div>
      <Head>
        <title>Connoisseur</title>
      </Head>
      <SiteHeader categories={categories} />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
