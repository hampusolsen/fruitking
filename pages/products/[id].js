import Image from 'next/image'
import { useState } from 'react'
import CMS from '../../cms'
import { useAddToCart } from '../../contexts/cart'
import { STRAPI_URL } from '../../lib/constants'
import styles from './Product.module.css'

export default function Product ({ product }) {
  const [amount, setAmount] = useState(1)
  const addToCart = useAddToCart()

  function handleSubmit (e) {
    e.preventDefault()
    addToCart(product, amount)
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.image}>
        <Image
          src={STRAPI_URL + product.image.url}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </section>
      <section>
        <dl className={styles.list}>
          <dt>Name</dt>
          <dd>{product.name}</dd>
          <dt>Description</dt>
          <dd>{product.descript}</dd>
          <dt>Unit</dt>
          <dd>{product.unit}</dd>
          <dt>Price</dt>
          <dd><b>{product.price}</b></dd>
          <dt>Last Updated</dt>
          <dd><time dateTime={product.updated_at}>{product.updated_at}</time></dd>
        </dl>
        <form onSubmit={handleSubmit}>
          <label>
            Amount to order
            <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} min={1} />
          </label>
          <button type="submit">Add to cart</button>
        </form>
      </section>
    </div>
  )
}

export async function getStaticPaths () {
  const response = await CMS.productPaths()
  const paths = response.map(({ id }) => ({ params: { id: `${id}` } }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps (ctx) {
  const product = await CMS.product(ctx.params.id)

  return {
    props: { product },
    revalidate: 600
  }
}
