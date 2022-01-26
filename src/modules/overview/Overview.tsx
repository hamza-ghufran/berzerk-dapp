import React from 'react'

import { Action } from 'commons/components'

import Stats from './stats/Stats'
import Banner from './banner/Banner'
import Statement from './statement/Statement'

import styles from './styles.module.css'

function Overview() {
  return <div className={styles.root}>
    <div className={styles.content}>
      <div className={styles.content__inline}>
        <section>
          <div className={styles.statement}>
            <Statement />
          </div>
          <div className={styles.action}>
            <Action />
          </div>
        </section>
        <section className={styles.section__banner}>
          <Banner />
        </section>
      </div>
      <section className={styles.section__stats}>
        <Stats />
      </section>
    </div>
  </div>
}

export default Overview