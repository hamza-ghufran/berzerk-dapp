import React from "react"

import styles from './styles.module.css'

function Statement() {
  return <div className={styles.root}>
    <div className={styles.text__main}>
      <h1>Welcome to Berzerk art.</h1>
    </div>
    <div className={styles.text__secondary}>
      <p>Mint an NFT and make contribution to the berzerk in us, and all around us.</p>
    </div>
  </div>
}

export default Statement