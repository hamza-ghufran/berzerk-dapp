import React from 'react'

import { Card } from 'commons/theme'

import styles from './styles.module.css'

interface StatsProps {
  title: string;
  value: any;
}

function StatContent(props: StatsProps) {
  const { title, value } = props

  return (
    <div>
      <div>
        <div className={styles.text__title}>{title}</div>
      </div>
      <div>
        <h5 className="bold">{value}</h5>
      </div>
    </div>
  )
}

function Stats() {
  return <div className={styles.root}>
    <div className={styles.stats}>
      <div className={styles.stat}>
        <StatContent title="Current Mint Price" value={0} />
      </div>
      <div className={styles.stat}>
        <StatContent title="Total Supply" value={0} />
      </div>
      <div className={styles.stat}>
        <StatContent title="Minted" value={'0/0'} />
      </div>
    </div>
  </div>
}

export default Stats