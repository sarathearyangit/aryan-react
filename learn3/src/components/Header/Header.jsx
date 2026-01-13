import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.hd}>
        <h1 className={styles.logo}>Model</h1>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header