import React from 'react';
import styles from './FoodInfo.module.css'

function FoodInfo(props) {

    let vegan = null
    let vegetarian = null
    let glutenFree = null
    let dairyFree = null
    let veryHealthy = null
    let cheap = null
    let sustainable = null
    let ketogenic = null

    if (props.vegan) {
        vegan = (
            <div className={styles.InnerContainer}><img src="/vegan.png" alt="" className={styles.Image}/> vegan</div>
        )
    }
    if (props.vegetarian) {
        vegetarian = (
            <div className={styles.InnerContainer}><img src="/vegan.png" alt="" className={styles.Image}/> vegetarian</div>
        )
    }
    if (props.glutenFree) {
        glutenFree = (
        <div className={styles.InnerContainer}><img src="/gluten-free.png" alt="" className={styles.Image}/> gluten free</div>
        )
    }
    if (props.dairyFree) {
        dairyFree = (
            <div className={styles.InnerContainer}><img src="/dairy-free.png" alt="" className={styles.Image}/> dairy free</div>
        )
    }
    if (props.veryHealthy) {
        veryHealthy = (
            <div className={styles.InnerContainer}><img src="/very-healthy.png" alt="" className={styles.Image}/> very healthy</div>
        )
    }
    if (props.cheap) {
        cheap = (
            <div className={styles.InnerContainer}><img src="/cheap.png" alt="" className={styles.Image}/> cheap</div>
        )
    }
    if (props.sustainable) {
        sustainable = (
            <div className={styles.InnerContainer}><img src="/sustainable.png" alt="" className={styles.Image}/> sustainable</div>
        )
    }
    if (props.ketogenic) {
        ketogenic = (
            <div className={styles.InnerContainer}><img src="/ketogenic.png" alt="" className={styles.Image}/> ketogenic</div>
        )
    }

    return (
        <div className={styles.Container}>
            {vegan}
            {vegetarian}
            {ketogenic}
            {glutenFree}
            {dairyFree}
            {veryHealthy}
            {cheap}
            {sustainable}
        </div>
    )
}

export default FoodInfo