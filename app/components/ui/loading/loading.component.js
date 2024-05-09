'use client'
import styles from './loading.module.scss'

export default function Loading () {

    return (
        <>
          <div className={styles.loading_container}>
              <div className={styles.loading_spinner}></div>
          </div>
        </>
    )
}