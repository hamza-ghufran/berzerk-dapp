import React from "react"

import { Card } from "commons/theme"

import placeHolderImg from 'assets/unique.svg'

import styles from './styles.module.css'

function Banner() {
  return <div className={styles.root}>
    <Card
      content={
        <div className={styles.img_container}>
          <img className={styles.banner} alt="" src={placeHolderImg} />
        </div>
      }
    />
  </div>
}

export default Banner