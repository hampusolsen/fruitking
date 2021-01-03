/* eslint-disable camelcase */
import Link from 'next/link'
import { useCart, useClearCart } from '../../../contexts/cart'
import { useSetModal } from '../../../contexts/modal'
import { useSetUser, useUser } from '../../../contexts/user'
import { pluralize } from '../../../lib/strings'
import CheckoutIcon from '../../svg/Checkout'
import CartItem from '../CartItem'
import Logo from '../Logo'
import styles from './SiteHeader.module.css'

export default function SiteHeader ({ categories }) {
  const setModal = useSetModal()
  const user = useUser()
  const setUser = useSetUser()
  const cart = useCart()
  const clearCart = useClearCart()

  const buttonLabel = user ? 'Logout' : 'Login'
  const handleLoginOrLogout = () => user ? setUser(undefined) : setModal('LoginModal')

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
          <Link href="/checkout"><a>Cart</a></Link>
          <ul className={`dropdownAlignRight dropdown ${styles.cart}`}>
            {cart.length === 0 && <p>Your cart is empty.</p>}
            {cart.map(product => <CartItem key={product.id} product={product} />)}
            {cart.length > 0 && (
              <div>
                <Link href="/checkout"><a className="button--solid"><CheckoutIcon /> Checkout</a></Link>
                <button onClick={clearCart}>Clear Cart</button>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}
