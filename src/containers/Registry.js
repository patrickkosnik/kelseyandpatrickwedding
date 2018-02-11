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
          <div className={styles.info}>We are currently putting together our registry, check back soon for more information! In the mean time, if you feel in the giving spirit feel free to donate to some our favorite organizations below.</div>
        </Modal>
      </div>
      <div className={styles.row}>
        <div className={styles.infoCard}>
          <Modal>
            <div className={styles.cardContent}>
              <div className={styles.subheader}>Humane Society of Huron Valley</div>
              <div className={styles.link}><a href="https://secure2.convio.net/hshv/site/Donation2?df_id=4843&mfc_pref=T&4843.donation=form1" target="blank">Click here to donate!</a></div>
            </div>
          </Modal>
        </div>
        <div className={styles.infoCard}>
          <Modal>
            <div className={styles.cardContent}>
              <div className={styles.subheader}>Women's March<br /><br /></div>
              <div className={styles.link}><a href="https://www.crowdrise.com/marchforward/fundraiser/womens-marchon-washington" target="blank">Click here to donate!</a></div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
    )
}

export default Registry