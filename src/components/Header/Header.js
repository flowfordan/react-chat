import React from "react";
import styles from './Header.module.css';

const Header = () => {


    return(
        <header className={styles.header}>
            <span className={styles.logo}>Logo</span>
            <span className={styles.about}>About</span>
            <span className={styles.logout}>Logout</span>
        </header>
    )


};

export default Header