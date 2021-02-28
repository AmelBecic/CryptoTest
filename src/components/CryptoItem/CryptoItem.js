import React from 'react';
import classes from './CryptoItem.module.css';


const CryptoItem = (props) => {

    return(
        <div onClick={props.clicked} className={classes.CryptoItem}>

            <p className={classes.Feature}>Name: {props.name}</p>
            <p className={classes.Feature}>ID: {props.id}</p>
            <p className={classes.Feature}>Email: {props.email}</p>
            <p className={classes.Feature}>City: {props.city}</p>
            <p className={classes.Feature}>Other info</p>



        </div>
    )



}

export default CryptoItem;