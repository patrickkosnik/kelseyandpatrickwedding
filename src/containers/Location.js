import React from 'react'
import Header from 'components/Header'
import Modal from 'components/Modal'
import styles from './Location.css'

const Location = () => {
  return (
    <div className={styles.container}>
      <Header light />
      <div className={styles.title}>
        <Modal>
          <div className={styles.header}>Ann Arbor, Michigan</div><br />
          {/* <div className={styles.info}>Celebrating where it all began! From working shifts at Bursley, tailgating before football games, eatling late night mac & cheese bites at the brown jug, we’ve had many wonderful adventures in this city. And we’re coming back to embark on one more big one. We cannot wait to share our special day with friends and family in a city that will always hold a special place in our hearts!</div> */}
        </Modal>
      </div>
      <div className={styles.row}>
        <div className={styles.infoCard}>
          <Modal>
            <div className={styles.cardContent}>
              <div className={styles.subheader}>Ceremony</div>
              <div className={styles.info}>
                Graduate Ann Arbor <br />
                1:00 PM
              </div>
              <div className={styles.info2}>Address</div>
              <div className={styles.info}>615 East Huron Street Ann Arbor, MI 48104</div>
              <div className={styles.info2}>Website</div>
              <div className={styles.info}><a href="https://www.graduatehotels.com/ann-arbor/" target="blank">Graduate Ann Arbor</a></div>
            </div>
          </Modal>
        </div>
        <div className={styles.infoCard}>
          <Modal>
            <div className={styles.cardContent}>
              <div className={styles.subheader}>Reception</div>
              <div className={styles.info}>
                Weber’s Inn <br />
                5:00 PM
              </div>
              <div className={styles.info2}>Address</div>
              <div className={styles.info}>3050 Jackson Rd. Ann Arbor, MI 48103</div>
              <div className={styles.info2}>Website</div>
              <div className={styles.info}><a href="http://www.webersinn.com" target="blank">Weber's Inn</a></div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Location
