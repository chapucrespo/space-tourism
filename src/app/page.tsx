import React from 'react'

import Navbar from '@/components/navbar'
import styles from './page.module.css'

export default function page() {
  return (
    <div className={styles.main}>
      <Navbar/>
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.littleText}>SO YOU WANT TO TRAVEL TO</h1>
          <h2 className={styles.bigText}>SPACE</h2>
          <p className={styles.paragraph}>
          Let’s face it; if you want to go to space,
          you might as well genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <button type='button' className={styles.button}>
          EXPLORE
        </button>
      </div>
    </div>
  )
}

