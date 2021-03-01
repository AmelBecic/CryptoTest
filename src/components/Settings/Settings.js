import React from 'react';
import classes from './Settings.module.css';
import {connect} from 'react-redux';
import {selectCurr} from '../../actions/cryptoActions';


const Settings = ({data , selectCurrency}) => {


    console.log(data.currency);
    return (
        <div>
            <p>Select a currency</p>
            <ul>
                <li><button onClick={() => selectCurrency('USD')} className={classes.button}>USD</button></li>
                <li><button onClick={() => selectCurrency('EUR')} className={classes.button}>EUR</button></li>
                <li><button onClick={() => selectCurrency('CNY')} className={classes.button}>CNY</button></li>
            </ul>
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
        selectCurrency: (id) => dispatch(selectCurr(id)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings);