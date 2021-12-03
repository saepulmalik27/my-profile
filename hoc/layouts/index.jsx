import HeaderBackground from 'components/background'
import Navbar from 'components/navbar'
import React from 'react'
import PropTypes from "prop-types";
import styles from './style.module.scss';

const Layout = ({children}) => {
    return (
       <>
        <header>
            <Navbar/>
            <HeaderBackground/>
        </header>
        <main className={styles.main}>
            {children}
        </main>
       </>
    )
}

Layout.prototypes = {children : PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.element])}

export default Layout
