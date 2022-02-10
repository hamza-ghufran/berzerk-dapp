import React from 'react'

import { Action } from 'commons/components'

import styles from './styles.module.css'

function Actions() {
  return (
    <div className={styles.root}>
      <section className={styles.section__action}>
        <Action />
      </section>
    </div>
  )
}

export default Actions