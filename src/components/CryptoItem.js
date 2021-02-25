import React from 'react';
import classes from './CryptoItem.module.css';


const CryptoItem = () => {

    return(
        <div className={classes.CryptoItem}>

            <p className={classes.Feature}>Name</p>
            <p className={classes.Feature}>Price</p>
            <p className={classes.Feature}>Market cap</p>
            <p className={classes.Feature}>Daily volume</p>
            <p className={classes.Feature}>Other info</p>



        </div>
    )



}

export default CryptoItem;