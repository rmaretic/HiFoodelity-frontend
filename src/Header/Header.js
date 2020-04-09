import React, {useContext} from 'react';
import styles from './Header.module.css';
import {LoginContext} from '../LoginContext';
import {Link} from 'react-router-dom';

function Header(props) {

    const [token, setToken] = useContext(LoginContext)

    let headerValues = (
        <div className={styles.LinkContainer}>
            <div className={styles.NavigationLink} onClick={props.openModal}>Login</div>
            <Link to="/register" className={styles.NavigationLink}>Register</Link>
        </div>
    )


    if (token.loggedIn) {
        headerValues = (
            <div className={styles.LinkContainer}>
                <a href="" className={styles.NavigationLink}>Weekly plan</a>
                <a href="" className={styles.NavigationLink}>Shopping list</a>
                <a href="" className={styles.NavigationLink}>Options</a>
                <a href="" className={styles.NavigationLink}>Log out</a>
            </div>
        )
    }

    return (
        <div className={styles.Container}>
            <img src="/logo.png"
                alt="HiFoodelity logo"
                className={styles.LogoImage} />
        {headerValues}
        </div>
    )
}

export default Header;