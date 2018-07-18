import React from 'react'
import styles from './SelectRsvp.css'

const SelectRsvp = ({result, checkboxes, toggleCheckbox, fetchData, submitted}) => {    
    return (
        <div className={styles.container}>
            <div className={styles.message}>
            Please check which guests will be attending. <br /><br />
                <div className={styles.checkboxes}>
                    {checkboxes
                        .map((checkbox, index) =>
                            <div key={index}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={checkbox.checked}
                                        onChange={() => toggleCheckbox(index)}
                                    />
                                    {checkbox.label}
                                </label>
                            </div>
                        )}
                </div>
                <button className={styles.submit} onClick={() => fetchData(
                    'https://beta.todoist.com/API/v8/tasks',
                    {
                        "content": checkboxes.map(guest =>
                            guest.label.concat(' = ', guest.checked ? "yes" : "no")
                        ).join('; '),
                        "project_id": 2170774499
                    })
                    }>Submit RSVP</button>
            </div>
        </div>
    )
}

export default SelectRsvp