import React from 'react';
import classes from './CryptoList.module.css';

import CryptoItem from '../components/CryptoItem';

const CryptoList = () => {


    return (
        <div>

            <h1 className={classes.title}>Crypto Currency list</h1>
            <CryptoItem />
            <CryptoItem />
            <CryptoItem />
            <CryptoItem />
            <CryptoItem />


        </div>
    )






    
}


export default CryptoList;