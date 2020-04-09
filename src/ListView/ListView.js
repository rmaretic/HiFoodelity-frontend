import React, { Component } from 'react'
import styles from './ListView.module.css';
import axios from 'axios';
import Recipe from './Recipe/Recipe'

class ListView extends Component {
    state = {items : []}

    componentDidMount() {
        axios.get('http://localhost:8000/api/all_recipes/')
            .then(response => {
                this.setState(response.data)
                console.log(this.state)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const recipes = this.state.items.map(recipe => {
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

export default ListView;