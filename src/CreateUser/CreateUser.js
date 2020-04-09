import React, { useState, useContext } from 'react';
import styles from './CreateUser.module.css';
import axios from 'axios';
import {LoginContext} from '../LoginContext';
import {Redirect} from 'react-router-dom';

function CreateUser() {

    const [isRegistered, setIsRegistered] = useState(false)
    const [token, setToken] = useContext(LoginContext)

    let emailInput = React.createRef();
    let passwordInput = React.createRef();

    const createUserHandler = () => {
        axios.post('http://localhost:8000/api/create_user/', {
            username: emailInput.current.value,
            email: emailInput.current.value,
            password: passwordInput.current.value
          })
          .then(function (response) {
            logIn();
            setIsRegistered(true);
          })
    }

    const logIn = () => {
        axios.post('http://localhost:8000/api/token/', {
            username: emailInput.current.value,
            password: passwordInput.current.value
          })
          .then(function (response) {
            response.data.loggedIn = true;
            setToken(response.data);
          })
    }

    let content = (
        <div>
            <h1>Registration form</h1>
            <div className={styles.InputContainer}>
                <input type="text" className={styles.Input} ref={emailInput} required />
                <label htmlFor="" className={styles.ActiveLabel}>Email</label>
            </div>
            <div className={styles.InputContainer}>
                <input type="password" className={styles.Input} ref={passwordInput} required />
                <label htmlFor="" className={styles.ActiveLabel}>Password</label>
            </div>
            <button className={styles.RegisterButton} onClick={createUserHandler}>Register</button>
        </div>

    )


    if (isRegistered) {
        content = (
            <div>
                <Redirect to='/start'/>;
            </div>
            
        )
    }

    return (
        <div className={styles.Container}>
            {content}
        </div>
    )
}

export default CreateUser;