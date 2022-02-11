import React, { useCallback, useEffect, useState } from 'react'
import { observer, inject } from 'mobx-react'

import styles from './styles.module.css'
import { AppStore } from 'commons/stores'

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

interface Props {
  store?: AppStore
}

function Stats(props: Props) {
  const blockchainStore = props.store!.blockchain

  const [totalSupply, setTotalSupply] = useState()

  const fetchTotalSupply = useCallback(async () => {
    try {

    }
    catch (e) {
      console.log(e)
    }
  }, [blockchainStore])

  useEffect(() => {
    fetchTotalSupply()
  }, [fetchTotalSupply, blockchainStore.defaultAccount])

  const maxSuppply = blockchainStore.config?.MAX_SUPPLY
  const mintPrice = blockchainStore.config?.DISPLAY_COST
  const symbol = blockchainStore.config?.NETWORK.SYMBOL

  const loading = '...'

  console.log(totalSupply)

  return <div className={styles.root}>
    <div className={styles.stats}>
      <div className={styles.stat}>
        <StatContent title="Current Mint Price" value={`${mintPrice || loading} ${symbol}`} />
      </div>
      <div className={styles.stat}>
        <StatContent title="Total Supply" value={maxSuppply || loading} />
      </div>
      <div className={styles.stat}>
        <StatContent title="Minted" value={`${totalSupply} / ${maxSuppply || loading}`} />
      </div>
    </div>
  </div>
}

export default inject('store')(observer(Stats))