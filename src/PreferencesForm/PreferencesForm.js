import React, { Component } from 'react';
import DietForm from './DietForm.js';
import ExcludeFoodForm from './ExcludeFoodForm.js';
import AdvancedListView from '../AdvancedListView/AdvancedListView';


export default class PreferencesForm extends Component {
    state = {
        step: 1,
        diet: '',
        selectedIngredients: []
    }


    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = (e) => {
        this.setState({diet: e.target.value });
        console.log(this.state)
    }

    setIngredientHandler = (e) => {
        let currentIngredients = this.state.selectedIngredients
        currentIngredients.push(e.target.innerHTML)
        this.setState({'selectedIngredients': currentIngredients})
        console.log(this.state.selectedIngredients)
    }

    deleteIngredient = ingredient => {
        var selectedIngredients = this.state.selectedIngredients;
        selectedIngredients.splice(selectedIngredients.indexOf(ingredient), 1);
        this.setState({'selectedIngredients': selectedIngredients});
    }

    handleIngredientChange = (e) => {
        
    }

    render() {
        switch(this.state.step) {
            case 1:
                return (
                    <DietForm 
                    
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    handleChange={this.handleChange}
                    value={this.state.diet}

                    />
                )
            case 2:
                return (
                    <ExcludeFoodForm 
                    setIngredient={this.setIngredientHandler}
                    selectedIngredients={this.state.selectedIngredients}
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    deleteIngredient={this.deleteIngredient}/>
                )
            case 3:
                return <AdvancedListView 
                    diet={this.state.diet}
                    selectedIngredients={this.state.selectedIngredients}/>
        }


    }
}
