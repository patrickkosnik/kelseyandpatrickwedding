import React from 'react'
import Header from 'components/Header'
import MapComponent from 'components/MapComponent'
import styles from './Location.css'

const Location = () => {
  return (
    <div className={styles.container}>
      <Header light />
      <div className={styles.info}>
        <div className={styles.left}>
          <h1 className={styles.heading}>Location</h1>
          <h2 className={styles.subheading}>Ceremony</h2>
          <p className={styles.paragraph}>TBD</p>
            <h2 className={styles.subheading}>Reception - 5:00 PM</h2>
          <p className={styles.paragraph}>Webers Ann Arbor -  
            <a href='http://www.webersinn.com/'> http://www.webersinn.com/</a></p>
        </div>
        <div className={styles.right}>
          {/* <MapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Location
