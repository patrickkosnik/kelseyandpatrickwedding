import React from 'react'
import Header from 'components/Header'
import Modal from 'components/Modal'
import styles from './Registry.css'

const Registry = () => {
    return (
    <div className={styles.container}>
      <Header light />
      <div className={styles.title}>
        <Modal>
          <div className={styles.header}>Registry - Coming Soon</div>
          <div className={styles.info}>We are currently putting together our registry, check back soon for more information!</div>
        </Modal>
      </div>
      <div className={styles.row}>
        <div className={styles.infoCard}>
          <Modal>
            <div className={styles.cardContent}>
              <div className={styles.subheader}>Registry Link Coming Soon</div>
              <div className={styles.link}><a href="/">Check back later!</a></div>
            </div>
          </Modal>
        </div>
        <div className={styles.infoCard}>
          <Modal>
            <div className={styles.cardContent}>
              <div className={styles.subheader}>Registry Link Coming Soon</div>
              <div className={styles.link}><a href="/">Check back later!</a></div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
    )
}

export default Registry