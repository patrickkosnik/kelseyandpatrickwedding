import React from 'react'
import Header from 'components/Header'
import styles from './Rsvp.css'
import guests from 'data/guests.json'

const Rsvp = () => {
    return (
        <div className={styles.container}>
            <Header light />
            <div className={styles.banner}>Coming Soon</div>
        </div>
    )
}

export default Rsvp