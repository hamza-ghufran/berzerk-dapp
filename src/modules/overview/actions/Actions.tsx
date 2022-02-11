import type { AppStore } from 'commons/stores'

import React from 'react'
import { observer, inject } from 'mobx-react'

import { ConnectWallet, Mint } from 'commons/components'

import styles from './styles.module.css'

/**
 * 
 * This should check if an account is connected
 * Based on the condition, display connect
 * or dispklay mint button
 */

interface Props {
  store?: AppStore
}

function Actions(props: Props) {
  const blockchainStore = props.store!.blockchain

  return (
    <div className={styles.root}>
      <section className={styles.section__action}>
        {blockchainStore.defaultAccount ? <Mint></Mint> : <ConnectWallet />}
      </section>
    </div>
  )
}

export default inject('store')(observer(Actions))