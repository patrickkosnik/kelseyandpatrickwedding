import React from 'react'
import styles from './FindInvError.css'

const FindInvError = ({handleBack}) => {    
    return (

        <div className={styles.message}>
            We’re Sorry! <br /><br />
            We can’t seem to find your invitation. Go back and enter your name again if you believe you may have entered something incorrectly. <br /><br />
            If you continue to have issues please call Patrick or Kelsey, or send an email to patrickkosnik@gmail.com.<br /><br />
            <button className={styles.back} onClick={handleBack}>Back</button>
        </div> 

    )
}

export default FindInvError