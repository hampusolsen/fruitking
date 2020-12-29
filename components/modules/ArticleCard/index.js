import Image from 'next/image'
import { STRAPI_URL } from '../../../lib/constants'
import styles from './ArticleCard.module.css'

export default function ArticleCard ({ article, size = 'large' }) {
  return (
    <article className={`${styles.article} ${styles[size]}`}>
      <Image
        className={styles.background}
        src={STRAPI_URL + article.image.url}
        layout="fill"
        objectFit="cover"
        alt={article.title} />
      <hgroup>
        <h1>{article.title}</h1>
        <h2>{article.subtitle}</h2>
      </hgroup>
      <footer>
        <time dateTime={article.created_at}>
          {new Date(article.created_at).toDateString()}
        </time>
      </footer>
    </article>
  )
}
