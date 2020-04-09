import React, {useContext} from 'react'
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import {LoginContext} from '../LoginContext';

function Home(props) {

    const [token, setToken] = useContext(LoginContext)

    const isAuthenticated = () => {
        if (token.loggedIn) {
            return true;
        } else {
            return false;
        }
    }

    let startButton = (
        <button className={styles.StartButton} onClick={props.openModal}>Start</button>
    )
    if (token.loggedIn) {
        startButton = (
            <Link to="/custom-recipes"><button className={styles.StartButton}>Start</button></Link>
        )
    }
    

    return (
        <div>
            <div className={styles.ActionContainer}>
                <h1>Daily recipes customized <br/> for you</h1>
                {startButton}
                <Link to="/recipes"><button className={styles.BrowseAllButton}>Browse all</button></Link>
            </div>
            <div className={styles.InfoContainer}>
                <div>
                    <h1>Don't know what to cook?</h1>
                    <p>We have solution for you, with over 360,000
                        recipes that you can choose from. All you
                        have to do is select your preferences and we'll
                        find you recipe. We can even choose wine that
                        best suits your meal.
                    </p>
                </div>
                <img src="/360recipes.png" alt="360,000+ recipes"/>
            </div>
            <div className={styles.InfoContainer}>
                <img src="/checkbox.png" alt="checkbox icon"/>
                <div>
                    <h1>Prepare your weekly plan</h1>
                    <p>Be prepared for the whole week.
                    You can print list of the ingredients to be
                    prepared for grociery shopping.
                    </p>
                </div>
            </div>
            <div className={styles.InfoContainerOneRow}>
                <div>
                    <h1>Choose cusine that you like</h1>
                    <p>
                    You want Italian cusine? No problem. Thai food?
                    Also no problem. You can choose food from over 20 world regions.
                    </p>
                </div>

                </div>
        </div>

    )
}

export default Home