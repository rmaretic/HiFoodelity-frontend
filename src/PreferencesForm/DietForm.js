import React, { Component, useContext } from 'react';
import styles from './DietForm.module.css'
import axios from 'axios';
import {LoginContext} from '../LoginContext';


function DietForm(props) {

    const [token, setToken] = useContext(LoginContext)


    const setDiet = () => {

        axios.post('http://127.0.0.1:8000/api/set_diet/', {
            'diet' : props.value
        }, {
            headers: {
                'authorization': "Bearer " + token.access,
            }
        })
        .then(response => {
            // return  response;
        })
    }


        return (
            <div className={styles.Container}>
                <h1>What kind of diet you prefer?</h1>
                <form action="" className={styles.Form}>
                <label className={styles.RadioContainer} >Classic
                <input type="radio"
                        name="diet"
                        value="classic"
                        onClick={props.handleChange}
                        defaultChecked={props.value === ""} />
                <span className={styles.Checkmark}></span>
                </label>

                <label className={styles.RadioContainer} >Vegetarian
                <input type="radio"
                        name="diet"
                        value="vegetarian"
                        onClick={props.handleChange}
                        defaultChecked={props.value === "vegetarian"}/>
                <span className={styles.Checkmark}></span>
                </label>

                <label className={styles.RadioContainer} >Vegan
                <input type="radio"
                        name="diet" 
                        value="vegan" 
                        onClick={props.handleChange}
                        defaultChecked={props.value === "vegan"} />
                <span className={styles.Checkmark}></span>
                </label>

                <label className={styles.RadioContainer} >Ketogenic
                <input type="radio"
                        name="diet" 
                        value="ketogenic" 
                        onClick={props.handleChange} 
                        defaultChecked={props.value === "ketogenic"}/>
                <span className={styles.Checkmark}></span>
                </label>

                <label className={styles.RadioContainer} >Paleo
                <input type="radio" 
                        name="diet" 
                        value="paleo" 
                        onClick={props.handleChange}
                        defaultChecked={props.value === "paleo"}/>
                <span className={styles.Checkmark}></span>
                </label>
                </form>
                <div className={styles.ButtonContainer}>
                    <button className={styles.CancelButton}>Cancel</button>
                    <button className={styles.NextButton} onClick={()=> {
                                                        setDiet();
                                                        props.nextStep()}}>Next</button>
                </div>
            </div>
        )
    }
export default DietForm;