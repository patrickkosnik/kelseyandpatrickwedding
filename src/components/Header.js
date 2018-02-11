import React from 'react'
import styles from './Header.css'
import { NavLink } from 'react-router-dom'

const Header = ({ light }) => {
  return (
    <div className={[light ? styles.light : styles.dark, styles.container].join(' ')}>
      <ul>
        <li><NavLink exact to="/"><span>Home</span></NavLink></li>
        <li><NavLink to="/location" activeClassName={styles.selected}><span>Location</span></NavLink></li>
        {/* <li><NavLink to="/rsvp" activeClassName={styles.selected}><span>RSVP</span></NavLink></li> */}
        <li><NavLink to="/registry" activeClassName={styles.selected}><span>Registry</span></NavLink></li>
      </ul>
    </div>
  )
}

export default Header
