import React from 'react'

import Statement from './statement/Statement'
import Banner from './banner/Banner'

import styles from './styles.module.css'

function Overview() {
  return <div className={styles.root}>
    <div className={styles.content}>
      <div className={styles.content__inline}>
        <section>
          <Statement />
        </section>
        <section>
          <Banner />
        </section>
      </div>
    </div>
  </div>
}

export default Overview