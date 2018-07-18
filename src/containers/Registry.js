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
          <div className={styles.header}>Registry</div>
          <div className={styles.info}>Links to our registry information can be found below!</div>
        </Modal>
      </div>
      <div className={styles.row}>
        <div className={styles.infoCard}>
          <Modal>
            <div className={styles.cardContent}>
              <div className={styles.subheader}>Zola</div>
              <div className={styles.link}>
                <a href="https://www.zola.com/registry/kelseyandpatrickwedding" target="_blank">
                  <span className={styles.btn}>Click to visit registry</span>
                </a>
              </div>
            </div>
          </Modal>
        </div>
        <div className={styles.infoCard}>
          <Modal>
            <div className={styles.cardContent}>
              <div className={styles.subheader}>Target</div>
              <div className={styles.link}>
                <a href="http://tgt.gifts/kelseyandpatrickwedding" target="_blank">
                  <span className={styles.btn}>Click to visit registry</span>
                </a>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
    )
}

export default Registry