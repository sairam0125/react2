import React from 'react'
import {Link} from 'react-router-dom'
import Styles from './navbar.module.css'
const Menulinks = () => {
  return (
    <div className={Styles.menulinks}>
        <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/Assessment">Assessment</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/Classroom">Classroom</Link></li>
        <li><Link to="/Meet">Meet</Link></li>
        <li><Link to="/News">News</Link></li></ul>
        
    </div>
  )
}

export default Menulinks