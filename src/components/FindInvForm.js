import React from 'react'
import styles from './FindInvForm.css'

const FindInvForm = ({
        handleSubmit,
        handleFirstChange,
        handleLastChange,
        firstName,
        lastName
    }) => {
    return (
        <div className={styles.container}>
            <div className={styles.intro}>Please enter your name as written on your invitiation</div>
            <form onSubmit={handleSubmit}>
                <label className={styles.labelContainer}>
                    <span className={styles.label}>First Name:</span>
                    <input className={styles.input} type="text" value={firstName} onChange={handleFirstChange} />
                </label>
                <label className={styles.labelContainer}>
                    <span className={styles.label}>Last Name:</span>
                    <input className={styles.input} type="text" value={lastName} onChange={handleLastChange} />
                </label>
                <input className={styles.submit} type="submit" value="Find Invitation" />
            </form>
        </div>
    )
}

export default FindInvForm