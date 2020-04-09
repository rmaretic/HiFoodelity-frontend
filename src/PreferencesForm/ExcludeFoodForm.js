import React, { useContext, useState } from 'react'
import styles from './ExcludeFoodComponent.module.css'
import axios from 'axios';
import {LoginContext} from '../LoginContext';


function ExcludeFoodForm (props) {


    let textInput = React.createRef()


    const [token, setToken] = useContext(LoginContext)
    const [suggestedIngredients, setSuggestedIngredients] = useState({suggestedIngredients: []})


    const getIngredients = (e) => {
        axios.get('https://api.spoonacular.com/food/ingredients/autocomplete?query=' +
         e.target.value + '&number=5&apiKey=50561005b54e423e9f2dc31088e8d4fd')
            .then(response => {
                setSuggestedIngredients({'suggestedIngredients' : response.data})
            })
    }

    const postIngredients = () => {
        axios.post('http://127.0.0.1:8000/api/set_excluded/', {
            'excluded' : props.selectedIngredients.toString()
        }, {
            headers: {
                'authorization': "Bearer " + token.access,
            }
        })
        .then(response => {
            // return  response;
        })
    }


    const clearSuggestedIngredients = () => {
        setSuggestedIngredients({suggestedIngredients: []})
    }

    const clearInput = () => {
        textInput.current.value = '';
    }

    function checkIfInputEmpty() {
        if (textInput.current.value = '') {
            textInput.current.classList.remove('active')
            console.log('not')
        } else {
            textInput.current.classList.add('active')
            console.log('active')
        }
    }


       const excludedIngredients = props.selectedIngredients.map(ingredient =>
            <div className={styles.excludedIngredient}>
                <div>{ingredient} </div>
                <div className={styles.deleteIngredient} 
                    onClick={()=> props.deleteIngredient(ingredient)}><b>x</b></div>
            </div> );

        const suggestedIngredientsHandler = suggestedIngredients.suggestedIngredients.map(ingredient =>
            <div className={styles.sugestionContainer}
                onClick={(event) => {
                    props.setIngredient(event);
                    clearSuggestedIngredients();
                    clearInput();
                }}>
                {ingredient.name}
            </div>
            )



        return (
            <div className={styles.Container}>
                <h1>Any dislikes or alergies?</h1>
                <div className={styles.AlergiesContainer}>
                    {excludedIngredients}
                </div>
                <div className={styles.TextInputContainer}>
                    <input type="text"
                            onChange={getIngredients}
                            className={styles.TextInput}
                            ref={textInput}/>
                    <label>Type your dislike or alergy</label>
                </div>
                {suggestedIngredientsHandler}
                <div className={styles.ButtonContainer}>
                    <button className={styles.CancelButton} onClick={props.previousStep}>Back</button>
                    <button className={styles.NextButton} onClick={()=> {
                        postIngredients();
                    }}>Next</button>
                </div>
            </div>
        )
    }

export default ExcludeFoodForm;