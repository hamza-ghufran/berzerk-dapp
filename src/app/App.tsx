import React from "react";

import { Overview } from "modules/overview";

import styles from './styles.module.css'

class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <main className={styles.main}>
          <Overview />
        </main>
      </div>
    )
  }
}

export default App