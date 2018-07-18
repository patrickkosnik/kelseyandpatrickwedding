import React from 'react'
import styles from './RsvpSuccess.css'
import { NavLink } from 'react-router-dom'

const RsvpSuccess = () => {    
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                Thank you for your submitting your RSVP!<br /><br />
                <div className={styles.return}>
                    <NavLink exact to="/"><span>Return Home</span></NavLink>
                </div>
            </div> 
        </div>
    )
}

export default RsvpSuccess