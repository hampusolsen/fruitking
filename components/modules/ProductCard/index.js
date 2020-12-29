import Image from 'next/image'
import { STRAPI_URL } from '../../../lib/constants'
import Add from '../../svg/Add'
import styles from './ProductCard.module.css'

export default function ProductCard ({ product, size = 'medium' }) {
  const src = size === 'medium'
    ? product.image.url
    : product.image.formats.thumbnail.url

  return (
    <article className={`${styles[size]} ${styles.article}`}>
      <header>
        <Image
          src={STRAPI_URL + src}
          alt={product.name}
          layout="fill"
          objectFit="cover" />
      </header>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <footer>
        <span><b>{product.price}</b> / {product.unit}</span>
        <button><Add /></button>
      </footer>
    </article>
  )
}
