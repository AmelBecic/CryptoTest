import React from 'react';
import {connect} from 'react-redux';


const DetailedCrypto = ({cryptoData}) => {



    return (
        <div>

            <p>{cryptoData.ime}</p>
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
        cryptoData: state.fetching
    }
}


export default connect(mapStateToProps)(DetailedCrypto);