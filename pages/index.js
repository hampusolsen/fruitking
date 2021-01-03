import CMS from '../cms'
import ArticleCard from '../components/modules/ArticleCard'
import ProductCarousel from '../components/modules/ProductCarousel'
import styles from './Home.module.css'

export default function Home ({ articles, latestProducts }) {
  const [a1, a2, ...mediumArticles] = articles
  const largeArticles = [a1, a2]

  return (
    <>
      <section className={styles.articles}>
        {largeArticles.map(article => <ArticleCard key={article.id} article={article} />)}
      </section>
      <section className={styles.products}>
        <h1>Recent Products</h1>
        <ProductCarousel products={latestProducts} />
      </section>
      <section className={styles.articles}>
        {mediumArticles.map(article => <ArticleCard key={article.id} article={article} size="medium" />)}
      </section>
    </>
  )
}

export async function getServerSideProps () {
  const articles = await CMS.articles()
  const latestProducts = await CMS.products('?_sort=updated_at:desc&_limit=15')

  return {
    props: {
      articles,
      latestProducts
    }
  }
}
