import Link from 'next/link';
import { useState } from 'react';
import { useSetUser, useUser } from '../../../contexts/user';
import LoginModal from '../LoginModal';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  const [modalActive, setModalActive] = useState(false);
  const user = useUser();
  const setUser = useSetUser();

  const buttonLabel = user ? 'Logout' : 'Login';
  const handleLoginOrLogout = () => user ? setUser(undefined) : setModalActive(true);

  return (
    <header className={styles.header}>
      <nav>categories</nav>
      <div>logo</div>
      <section>
        <nav className={styles.rightNav}>
          <ul>
            <li>
              <button onClick={handleLoginOrLogout}>{buttonLabel}</button>
              <nav className={styles.dropdown}>
                <ul>
                  <li>
                    <button onClick={handleLoginOrLogout}>{buttonLabel}</button>
                  </li>
                  <li>
                    <Link href="/registration"><a>Register</a></Link>
                  </li>
                  <li>
                    <Link href="/profile"><a>Profile</a></Link>
                  </li>
                  <li>
                    <Link href="/orders"><a>Orders</a></Link>
                  </li>
                </ul>
              </nav>
            </li>
            <li>
              <Link href="/cart"><a>Cart</a></Link>
              <section className={styles.dropdown}>
                <ul>
                  <li>fruits</li>
                  <li>fruits</li>
                  <li>fruits</li>
                  <li>fruits</li>
                  <li>fruits</li>
                  <li>vegetable</li>
                </ul>
              </section>
            </li>
          </ul>
        </nav>
      </section>
      {modalActive && <LoginModal close={() => setModalActive(false)} />}
    </header>
  )
}