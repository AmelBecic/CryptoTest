import React , {useState} from 'react';
import {Button } from 'react-bootstrap';
import classes from './Settings.module.css';
import {connect} from 'react-redux';
import {selectCurr , fetchCrypto} from '../../actions/cryptoActions';


const Settings = ({data , selectCurrency , fetchedCrypto}) => {

    const [submited , handleSubmit] = useState(false);
    
    return (
        <div className={classes.settings}>
            <h2>Current currency: {data.currency} </h2>
            <h2>Click on wanted currency and submit to change</h2>
            <ul className={classes.ul}>
                <li className={classes.li}><button onClick={() => {selectCurrency('USD'); handleSubmit(true); }} className={classes.button}>USD</button></li>
                <li className={classes.li}><button onClick={() => {selectCurrency('EUR'); handleSubmit(true);  }} className={classes.button}>EUR</button></li>
                <li className={classes.li}><button onClick={() => {selectCurrency('CNY'); handleSubmit(true); }} className={classes.button}>CNY</button></li>
                
            </ul>
            <button className={classes.change} onClick={() => {fetchedCrypto(data.currency); handleSubmit(false); }}>SUBMIT</button>
            {submited && <h2 className={classes.submit}> Not submited yet </h2>}
        </div>
    )

}
const mapStateToProps = state => {
    return {
        data: state.fetching
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchedCrypto: (curr) => dispatch(fetchCrypto(curr)),
        selectCurrency: (id) => dispatch(selectCurr(id))  
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings);