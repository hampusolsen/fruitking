import CMS from '../cms'
import ArticleCard from '../components/modules/ArticleCard'
import ProductCarousel from '../components/modules/ProductCarousel'

export default function Home ({ articles, latestProducts }) {
  return (
    <>
      <ProductCarousel products={latestProducts} />
      {articles.map(article => <ArticleCard key={article.id} article={article} />)}
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
