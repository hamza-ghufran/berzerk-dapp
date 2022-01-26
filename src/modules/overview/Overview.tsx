import React from 'react'

import Statement from './statement/Statement'
import Banner from './banner/Banner'

import styles from './styles.module.css'

function Overview() {
  return <div className={styles.root}>
    <section className={styles.section__c1}>
      <div>
        <Statement />
      </div>
      <div>
        <Banner />
      </div>
    </section>
    <section className={styles.section__c2}>
    </section>
  </div>
}

export default Overview