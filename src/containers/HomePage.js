import React from 'react'
import Header from 'components/Header'
import styles from './HomePage.css'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className={styles.app}>
      <Header />
      <h1 className={styles.header}>Kelsey &amp; Patrick</h1>
      <span className={styles.subHeader}>October 12th, 2018</span>
    </div>
  )
}

export default HomePage
