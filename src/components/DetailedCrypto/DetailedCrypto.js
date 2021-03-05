import React from 'react';
import {connect} from 'react-redux';


const DetailedCrypto = ({ide , cryptoInfo , currency}) => {


    console.log(cryptoInfo);
    console.log(ide);
    
    return (
        <div>

            <p>CLICKED ID: {ide}</p>
            <p>Price set in settings: {currency}</p>
            <p>Market cap: To be added after solving api</p>
            <p>Daily volume: To be added after solving api</p>
            <p>Other info: To be added after solving api</p>

        </div>
    )



}

const mapStateToProps = state => {
    return {
        cryptoInfo: state.fetching.cryptoData ,
        ide: state.fetching.id ,
        currency: state.fetching.currency
    }
}


export default connect(mapStateToProps)(DetailedCrypto);