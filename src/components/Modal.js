import React from 'react'
import styles from './Modal.css'


const Modal = (props) => {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}

export default Modal