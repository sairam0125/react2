import React from 'react'
import Menulinks from './Menulinks'
import Logo from './Logo'
import Styles from './navbar.module.css'
const Navbar = () => {
  return (
    
        <section className={Styles.navbar}>
            <article>
            <Logo/>
            <Menulinks/>
            </article>
        </section>
    
  )
}

export default Navbar