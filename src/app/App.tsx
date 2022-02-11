import type { CONFIG } from 'local-types'

import React, { useCallback, useEffect, useState } from "react";
import { inject, observer } from 'mobx-react';

import { Overview } from "modules/overview";
import { AppStore } from 'commons/stores';

import styles from './styles.module.css'

interface Props {
  store?: AppStore
}

function App(props: Props) {
  const blockchainStore = props.store!.blockchain

  const fetchRequiredData = useCallback(async () => {
    await blockchainStore.getConfig()
    await blockchainStore.getAbi()
  }, [blockchainStore])

  const setupContract = useCallback(() => {
    blockchainStore.setupContract()
  }, [blockchainStore]);

  useEffect(() => {
    fetchRequiredData()
  }, [fetchRequiredData])

  useEffect(() => {
    setupContract()
  }, [setupContract, blockchainStore.defaultAccount])

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <Overview />
      </main>
    </div>
  )
}

export default inject('store')(observer(App))