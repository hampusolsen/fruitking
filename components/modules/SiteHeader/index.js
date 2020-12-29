/* eslint-disable camelcase */
import Link from 'next/link'
import { useState } from 'react'
import { useSetUser, useUser } from '../../../contexts/user'
import { pluralize } from '../../../lib/strings'
import LoginModal from '../LoginModal'
import Logo from '../Logo'
import styles from './SiteHeader.module.css'

export default function SiteHeader ({ categories }) {
  const [modalActive, setModalActive] = useState(false)
  const user = useUser()
  const setUser = useSetUser()

  const buttonLabel = user ? 'Logout' : 'Login'
  const handleLoginOrLogout = () => user ? setUser(undefined) : setModalActive(true)

  return (
    <header className={styles.header}>
      <nav>
        <div className="dropdownParent">
          <Link href="/"><a>Categories</a></Link>
          <ul className="dropdownAlignLeft dropdown">
            {categories.map(({ id, category_name }) => (
              <li key={category_name}>
                <Link href={`/categories/${id}`}><a>{pluralize(category_name)}</a></Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Link href="/"><a><Logo /></a></Link>
      <nav>
        <div className="dropdownParent">
          <button onClick={handleLoginOrLogout}>{buttonLabel}</button>
          <ul className="dropdownAlignRight dropdown">
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
        </div>
        <div className="dropdownParent">
          <Link href="/cart"><a>Cart</a></Link>
          <ul className="dropdownAlignRight dropdown">
            <li>fruits</li>
            <li>fruits</li>
            <li>fruits</li>
            <li>fruits</li>
            <li>fruits</li>
            <li>vegetable</li>
          </ul>
        </div>
      </nav>
      {modalActive && <LoginModal close={() => setModalActive(false)} />}
    </header>
  )
}
