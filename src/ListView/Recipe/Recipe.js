import React from 'react';
import styles from './Recipe.module.css';
import { Link } from "react-router-dom";

function Recipe(props) {
    return (
        <div>
            <Link to={'/recipes/' + props.url}>
                <div className={styles.Container}>
                    <div className={styles.ImageContainer}>
                        <img src={props.image} alt=""/>
                    </div>
                    <h3>{props.title}</h3>
                        <div><img src="/time.png"
                                alt="clock icon"
                                className={styles.Icons}/>{props.time} min</div>
                        <div><img src="/servings.png"
                                alt="serving dish icon"
                                className={styles.Icons}/>
                                {props.servings} servings</div>
                </div>
            </Link>
        </div>
    )
}

export default Recipe