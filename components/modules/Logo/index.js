import React from 'react'
import Crown from '../../svg/Crown'
import styles from './Logo.module.css'

export default function Logo () {
  return (
    <section className={styles.wrapper}>
      <Crown />
      <h1 className={styles.text}>Connoisseur</h1>
    </section>
  )
}
