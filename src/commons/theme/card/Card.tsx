import React from "react";

import styles from './styles.module.css'

interface Props {
  content: React.ReactChild;
  footer?: React.ReactChild
}

function Card(props: Props) {
  return <div className={styles.root}>
    <div className={styles.container}>

      <section className={styles.section__content}>
        {props.content}
      </section>

      {props.footer && <section className={styles.section__footer}>
        {props.footer}
      </section>}
    </div>
  </div>
}

export default Card