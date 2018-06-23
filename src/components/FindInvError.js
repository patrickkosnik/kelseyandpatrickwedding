import React from 'react'
import styles from './FindInvError.css'

const FindInvError = ({handleBack, result}) => {
    return (
        <div className={styles.container}>
            {result ? 
                <div className={styles.message}>
                    <div key={result.guests[0].firstName + result.guests[0].lastName}>
                        {result.guests.map(guest =>
                            <div key={guest.firstName + guest.LastName}>
                                First Name: {guest.firstName} <br />
                                Last Name: {guest.lastName}
                            </div>
                        )}
                    </div>
                </div> :
                <div className={styles.message}>
                    We’re Sorry! <br /><br />
                    We can’t seem to find your invitation. Please call Patrick or Kelsey or send an email to patrickkosnik@gmail.com.<br /><br />
                    <button className={styles.back} onClick={handleBack}>Back</button>
                </div> 
            }
        </div>
    )
}

export default FindInvError