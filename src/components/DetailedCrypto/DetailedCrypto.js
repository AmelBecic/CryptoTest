import React from 'react';
import {connect} from 'react-redux';


const DetailedCrypto = ({ide , cryptoInfo}) => {


    console.log(cryptoInfo);
    console.log(ide);
    let number = ide-1;
    return (
        <div>

            <p>CLICKED ID: {ide}</p>
            <p>Price:</p>
            <ul>
                <li>USD</li>
                <li>EUR</li>
                <li>CNY</li>
            </ul>
            <p>Market cap</p>
            <p>Daily volume</p>
            <p>Other info</p>

        </div>
    )



}

const mapStateToProps = state => {
    return {
        cryptoInfo: state.fetching.cryptoData ,
        ide: state.fetching.id
    }
}


export default connect(mapStateToProps)(DetailedCrypto);