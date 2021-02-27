import React , {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchCrypto} from '../actions/cryptoActions';
import classes from './CryptoList.module.css';

import CryptoItem from '../components/CryptoItem/CryptoItem';
import Modal from '../components/Modal/Modal';

const CryptoList = ({cryptoList , fetchedCrypto}) => {

        useEffect(() => {
            fetchedCrypto()
        } , [])

    

        return (
            <div>
    
                <h1 className={classes.title}>Crypto Currency list</h1>
                {cryptoList.cryptoData.map(crypto => {
                    return (<p>{crypto.name}</p>)
                })}

                <Modal>
                    <p>Hello there</p>
                </Modal>
                <CryptoItem />
                <CryptoItem />
                <CryptoItem />
                <CryptoItem />
                <CryptoItem />
    
    
            </div>
        )
    
    
}

const mapStateToProps = state => {
    return {
        cryptoList: state.fetching
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchedCrypto: () => dispatch(fetchCrypto())
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(CryptoList);