import React from 'react'

import styles from './styles.module.css'

const CONFIG = { MAX_SUPPLY: 10 }
const data = { totalSupply: 1 }

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
        <StatContent title="Total Supply" value={CONFIG.MAX_SUPPLY} />
      </div>
      <div className={styles.stat}>
        <StatContent title="Minted" value={`${data.totalSupply} / ${CONFIG.MAX_SUPPLY}`} />
      </div>
    </div>
  </div>
}

export default Stats