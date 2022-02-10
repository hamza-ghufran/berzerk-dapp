import type { CONFIG } from 'local-types'

import React, { useEffect, useState } from "react";

import { Overview } from "modules/overview";

import styles from './styles.module.css'

function App() {
  const [config, setConfig] = useState<CONFIG | null>();

  const getConfig = async () => {
    // call store method
    // set from store method
    setConfig(config);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getConfig()
  }, [])

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <Overview />
      </main>
    </div>
  )
}

export default App