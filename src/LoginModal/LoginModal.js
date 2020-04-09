import React, {useContext, useState} from 'react';
import styles from './LoginModal.module.css';
import axios from 'axios';
import {LoginContext} from '../LoginContext';

function LoginModal(props) {

    const [token, setToken] = useContext(LoginContext)
    const [errorMessage, setErrorMessage] = useState({'message' : ''})
    
    let emailInput = React.createRef();
    let passwordInput = React.createRef();


    const getToken = () => {
        axios.post('http://localhost:8000/api/token/', {
            username: emailInput.current.value,
            password: passwordInput.current.value
          })
          .then(function (response) {
            props.closeModalOnSubmit();
            response.data.loggedIn = true;
            setToken(response.data);
          })
          .catch(function (error) {
              if(error.response.status == 401 ) {
                  setErrorMessage({message: 'Wrong username or password'})
              } else {
                setErrorMessage({message: 'Oops, something went wrong'})
              }
          });
        }

 
    return (
    <div className={styles.Background} onClick={props.closeModalHandler}>
        <div className={styles.ModalContainer}>
            <h2>Log in.</h2>
            <p>{errorMessage.message}</p>
            <div className={styles.InputContainer}>
                <input type="text" className={styles.Input} ref={emailInput} required />
                <label htmlFor="" className={styles.ActiveLabel}>Email</label>
            </div>
            <div className={styles.InputContainer}>
                <input type="password" className={styles.Input} ref={passwordInput} required/>
                <label htmlFor="" className={styles.ActiveLabel}>Password</label>
            </div>
            <button className={styles.LoginButton}
                    onClick={getToken}>Log me in</button>
            <p>Forgot password? <br/>
            Reset it <b>here</b>
            </p>
        </div>
    </div>
    )
}

export default LoginModal;