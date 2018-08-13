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
      <div className={styles.row2}>
        <div className={styles.infoCard}>
          <Modal>
            <div className={styles.cardContent}>
              <div className={styles.subheader}>Parking Near Ceremony</div>
              <div className={styles.info2}>Vouchers For Parking</div>
              <div className={styles.info}>If you park in the following structures you will be able to receive a voucher for parking. 
              Upon entering the structure take a ticket from the machine. 
              At the end of the ceremony you will receive a voucher. 
              Hand both the ticket and voucher to the attendant when exiting the structure.</div>
              <div className={styles.info2}>Liberty Square Structure</div>
              <div className={styles.info}>510 E Washington St, Ann Arbor, MI 48104</div>
              <div className={styles.info2}>Maynard & Thomposon Structure</div>
              <div className={styles.info}>324 Maynard St, Ann Arbor, MI 48104</div>
              <div className={styles.detail}>NOTE: There may also be street and metered parking on the nearby streets of the ceremony location. 
              Parking will be available in the lot at Weber's for the Reception. </div>
              {/* <div className={styles.info2}>Website</div>
              <div className={styles.info}><a href="https://www.graduatehotels.com/ann-arbor/" target="blank">Graduate Ann Arbor</a></div> */}
            </div>
          </Modal>
        </div>
        <div className={styles.infoCard}>
          <Modal>
            <div className={styles.cardContent}>
              <div className={styles.subheader}>Accommodations</div>
              <div className={styles.detail}>
              It is a football weekend in Ann Arbor so we recommend you book sooner than later! Most recommended hotels are near Briarwood Mall just of the State St exit on I-94. Below are a few options, but there are also more in the same area.
              </div>
              <div className={styles.info2}><a href="http://www.starwoodhotels.com/sheraton/property/overview/index.html?propertyID=761&SWAQ=958P" target="blank">Sheraton - Ann Arbor</a></div>
              <div className={styles.info}>3200 Boardwalk Dr, Ann Arbor, MI 48108</div>
              <div className={styles.info2}><a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/ann-arbor/arbmi/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-ARBMI" target="blank">Holiday Inn Express & Suites Ann Arbor</a></div>
              <div className={styles.info}>600 Briarwood Cir, Ann Arbor, MI 48108</div>
              <div className={styles.info2}><a href="https://www.ihg.com/holidayinn/hotels/us/en/ann-arbor/arbep/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-US-_-ARBEP" target="blank">Holiday Inn & Suites Ann Arbor</a></div>
              <div className={styles.info}>3155 Boardwalk Dr, Ann Arbor, MI 48108</div>
              <div className={styles.info2}><a href="https://www.choicehotels.com/michigan/ann-arbor/comfort-inn-hotels/mi229?source=gyxt" target="blank">Comfort Inn & Suites University South</a></div>
              <div className={styles.info}>3501 S State St, Ann Arbor, MI 48108</div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Location
