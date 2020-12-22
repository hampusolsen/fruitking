import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <nav>categories</nav>
      <div>logo</div>
      <section>login, varukorg</section>
    </header>
  )
}