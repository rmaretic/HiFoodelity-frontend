import React, { Component } from 'react';
import styles from './AdvancedListView.module.css';
import Recipe from '../ListView/Recipe/Recipe';
import axios from 'axios';


class AdvancedListView extends Component {
    state = {results: []}

    diet = 'diet=' + this.props.diet
    selectedIngredients = 'excludeIngredients=' + this.props.selectedIngredients.toString()

    

    componentDidMount() {
        axios.get('https://api.spoonacular.com/recipes/search?query=' + this.diet + '&' + this.selectedIngredients + '&' + 'number=100&apiKey=50561005b54e423e9f2dc31088e8d4fd')
            .then(response => {
                this.setState(response.data)
                console.log(this.selectedIngredients);
            })
    }



    render() {
        const recipes = this.state.results.map(recipe => {
            return <Recipe 
                    url={recipe.id}
                    image={this.state.baseUri + recipe.image}
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
}

export default AdvancedListView;