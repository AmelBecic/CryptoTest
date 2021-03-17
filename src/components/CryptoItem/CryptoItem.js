import React from 'react';
import classes from './CryptoItem.module.css';
import {Row , Col} from 'react-bootstrap';


const CryptoItem = (props) => {

    let curr = 'USD';
    if (props.curr === 'EUR'){
        curr = 'EUR';
    }
    if (props.curr === 'CNY') {
        curr = 'CNY';
    }

    return(

        <Row onClick={() => props.clicked(props.id)} className={classes.CryptoItem}>
            <Col className={classes.currency}>{props.name}</Col>
            <Col className={classes.currency}>{props.symbol}</Col>
            <Col className={classes.currency}>ID: {props.id}</Col>
            <Col >Price : {props.price} <p className={classes.currency}>{curr}</p> </Col>
        </Row>
        
    )



}

export default CryptoItem;