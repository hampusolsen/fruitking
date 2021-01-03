import CMS from '../../cms'
import ProductCard from '../../components/modules/ProductCard'
import { capitalize, pluralize } from '../../lib/strings'
import styles from './Category.module.css'

export default function Category ({ category }) {
  return (
    <>
      <h1 className={styles.title}>{capitalize(pluralize(category.category_name))}</h1>
      <section className={styles.section}>
        {category.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  )
}

export async function getServerSideProps (ctx) {
  const category = await CMS.category(ctx.params.id)

  return {
    props: {
      category
    }
  }
}
