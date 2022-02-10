import type { CONFIG } from 'local-types'

import React, { useEffect, useState } from "react";

import { Overview } from "modules/overview";

import styles from './styles.module.css'

function App() {
  const [config, setConfig] = useState<CONFIG | null>();

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();

    setConfig(config);
  };


  useEffect(() => {
    getConfig()
  }, [])

  console.log(config)
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <Overview />
      </main>
    </div>
  )
}

export default App