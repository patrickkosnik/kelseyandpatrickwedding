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
      <div className={styles.info}>*Please RSVP by September 21st.</div>
      <div className={styles.rsvp}>
      <NavLink to="/rsvp"><span>Click here to RSVP</span></NavLink>
      </div>
    </div>
  )
}

export default HomePage
