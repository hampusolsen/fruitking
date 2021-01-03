import Image from 'next/image'
import { useRemoveFromCart } from '../../../contexts/cart'
import { useSetModal } from '../../../contexts/modal'
import { STRAPI_URL } from '../../../lib/constants'
import { pluralize } from '../../../lib/strings'
import DeleteIcon from '../../svg/Delete'
import EditIcon from '../../svg/Edit'
import styles from './CartItem.module.css'

export default function CartItem ({ product }) {
  const src = product.image.formats?.thumbnail?.url || product.image.url
  const setModal = useSetModal()
  const removeFromCart = useRemoveFromCart()

  return (
    <li className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <Image
          src={STRAPI_URL + src}
          layout="fill"
          objectFit="cover"
          alt={product.name}
        />
      </div>
      <h2>{product.name}</h2>
      <div className={styles.priceDetails}>
        <span>{`${product.amount} ${pluralize(product.unit)}`}</span>
        <b>{(product.amount * product.price).toFixed(2)}</b>
      </div>
      <div className={styles.menu}>
        <button onClick={() => setModal('AddCartItemModal', { product, type: 'edit' })}><EditIcon /></button>
        <button onClick={() => removeFromCart(product)}><DeleteIcon /></button>
      </div>
    </li>
  )
}
