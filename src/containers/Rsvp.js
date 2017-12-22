import React from 'react'
import Header from 'components/Header'
import styles from './Rsvp.css'
import guests from 'data/guests.json'

const Rsvp = () => {
    return (
        <div className={styles.container}>
            <Header light />
            <div className={styles.banner}>Coming Soon</div>
            <div>{guests.guests.map(guest => 
            <div>
                First Name: {guest.firstName} <br />
                Last Name: {guest.lastName} <br />
                { guest.partnerFirst ? <div>First Name: {guest.partnerFirst}<br /></div> : ''}
                { guest.partnerFirst ? <div>Last Name: {guest.partnerLast}<br /></div> : ''}
                Plus Ones: {guest.plusOnes.map(
                    plusOne => <span>{plusOne}, </span>
                )
                }
                <br /><br />
            </div>)
        }</div>
        </div>
    )
}

export default Rsvp