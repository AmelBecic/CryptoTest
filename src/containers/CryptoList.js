import React , {useEffect} from 'react';
import {connect} from 'react-redux';
import {cancelCrypto, fetchCrypto, selectCrypto} from '../actions/cryptoActions';
import classes from './CryptoList.module.css';

import CryptoItem from '../components/CryptoItem/CryptoItem';
import Modal from '../components/Modal/Modal';
import DetailedCrypto from '../components/DetailedCrypto/DetailedCrypto';

const CryptoList = ({cryptoList , fetchedCrypto , clickCrypto , closeCrypto}) => {

        useEffect(() => {
            fetchedCrypto();
            console.log(cryptoList.cryptoClicked)
        } , [])

    

        return (
            <div>

                <Modal show={cryptoList.cryptoClicked} modalClosed={closeCrypto}>
                    <DetailedCrypto />
                </Modal>
    
                <h1 className={classes.title}>Top 100 list</h1>
                {cryptoList.cryptoData.map(crypto => {
                    return (<CryptoItem currency={cryptoList.currency} clicked={clickCrypto} id={crypto.id} name={crypto.name} email={crypto.email} city={crypto.address.city} />)
                })}

    
    
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
        fetchedCrypto: () => dispatch(fetchCrypto()) ,
        clickCrypto: (id) => dispatch(selectCrypto(id)) ,
        closeCrypto: () => dispatch(cancelCrypto())
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(CryptoList);