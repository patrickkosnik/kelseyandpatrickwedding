import React from 'react'
import styles from './FindInvError.css'

const FindInvError = ({handleBack}) => {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                We’re Sorry! <br />
                We can’t seem to find your invitation. Please call Patrick or Kelsey or send an email to patrickkosnik@gmail.com.<br />
            </div>
            <button className={styles.back} onClick={handleBack}>Back</button>
        </div>
    )
}

export default FindInvError