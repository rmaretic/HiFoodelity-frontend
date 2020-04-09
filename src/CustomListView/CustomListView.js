import React, { useState, useEffect, useContext } from 'react'
import styles from './CustomListView.module.css';
import axios from 'axios';
import Recipe from '../ListView/Recipe/Recipe'
import {LoginContext} from '../LoginContext';


function CustomListView() {


    const [token, setToken] = useContext(LoginContext)
    const [results, setResults] = useState({results: []})

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/customized_recipes/', {
        },{
            headers: {
                'authorization': "Bearer " + token.access,
            }
        })
        .then(response => {
            setResults(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    
    }, []);




        const recipes = results.results.map(recipe => {
            return <Recipe 
                    url={recipe.id}
                    image={results.baseUri + recipe.image}
                    title={recipe.title}
                    time={recipe.readyInMinutes}
                    servings={recipe.servings}
                    key={recipe.id} />
        })

        return (
            <div className={styles.Container}>
                {recipes}
            </div>
        )
}

export default CustomListView;