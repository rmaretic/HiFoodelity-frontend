import React, { Component } from 'react';
import axios from 'axios';
import styles from './DetailView.module.css';
import FoodInfo from './FoodInfo';

class DetailView extends Component {
    state = {extendedIngredients: [],
            analyzedInstructions: [{steps:[{step: ''}]}]}

    componentDidMount() {
        axios.get('https://api.spoonacular.com/recipes/' + this.props.match.params.id + '/information?apiKey=50561005b54e423e9f2dc31088e8d4fd')
                .then(res => {
                    this.setState(res.data)
                    console.log(this.state)
                })
    }

    render() {

        
        const ingredients = this.state.extendedIngredients.map(ingredient => {
            return(
                <div>
                    <p>{ingredient.original}</p>
                </div>
            )
        })

        const instructions = this.state.analyzedInstructions[0].steps.map(instruction => {
            return(
                <div><p><b>{instruction.number}</b> {instruction.step}</p></div>
            )
        })


        const foodInfo = (<FoodInfo 
            vegan={this.state.vegan}
            vegetarian={this.state.vegetarian}
            glutenFree={this.state.glutenFree}
            dairyFree={this.state.dairyFree}
            veryHealthy={this.state.veryHealthy}
            cheap={this.state.cheap}
            sustainable={this.state.sustainable}
            ketogenic={this.state.ketogenic}/>)

        const subtitle = (
            <div className={styles.Subtitle}>
                <div className={styles.SubtitleItem}><img src="/time-white.png" alt="" className={styles.IconImage}/> 50 minutes</div>
                <div className={styles.SubtitleItem}><img src="/servings-white.png" alt="" className={styles.IconImage}/> {this.state.servings} servings</div>
            </div>
        )




        return (
            <div className={styles.Container}>
                <div className={styles.TitleContainer}>
                    <h1>{this.state.title}</h1>
                    {subtitle}
                </div>
                <div className={styles.ImageOuterContainer}>
                    <div className={styles.ImageContainer}>
                        <img src={this.state.image + '?apiKey=df7c1b0043b54f278453d8df6afebd72'} alt="" className={styles.Image}/>
                    </div>
                    {foodInfo}
                </div>
                <div className={styles.IngredientsInstructionsContainer}>
                    <div className={styles.Ingredients}>
                        <h2>Ingredients</h2>
                        <p>{ingredients}</p>
                    </div>
                    <div className={styles.Instructions}>
                        <h2>Instructions</h2>
                        <p>{instructions}</p>
                    </div>
                </div>
            </div>
        )
    }
}



export default DetailView;