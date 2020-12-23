import Head from 'next/head';
import { useModalContext } from '../contexts/modal';
import SiteHeader from './modules/SiteHeader/';

export default function SiteLayout({ children }) {
  const Modal = useModalContext();

  return (
    <div>
      <Head>
        <title>Fruit King</title>
        <link rel="icon" href="/apple.ico" />
      </Head>
      <SiteHeader />
      {children}
      {Modal && Modal}
    </div>
  )
}