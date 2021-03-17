import React , {useEffect , useState} from 'react';
import {connect} from 'react-redux';
import {cancelCrypto, fetchCrypto, selectCrypto} from '../actions/cryptoActions';
import classes from './CryptoList.module.css';

import CryptoItem from '../components/CryptoItem/CryptoItem';
import Modal from '../components/Modal/Modal';
import DetailedCrypto from '../components/DetailedCrypto/DetailedCrypto';

const CryptoList = ({cryptoList , fetchedCrypto , clickCrypto , closeCrypto , selectedCurrency}) => {

        useEffect(() => {
            
            
            
        } , [])

        console.log(selectedCurrency);

        let spinner = <h1>LOADING ...</h1>

        if (selectedCurrency === 'USD') {
            spinner = cryptoList.cryptoDataUSD.map(crypto => {
                let setCurrency = Number.parseFloat(crypto.quote.USD.price.toString()).toFixed(3);
                return (<CryptoItem key={crypto.id} curr={selectedCurrency} price={setCurrency} symbol={crypto.symbol} clicked={clickCrypto} id={crypto.id} name={crypto.name} />)
            })
        }
        
        if (selectedCurrency === 'EUR') {
            spinner = cryptoList.cryptoDataEUR.map(crypto => {
                let setCurrency = Number.parseFloat(crypto.quote.EUR.price.toString()).toFixed(3);
                return (<CryptoItem key={crypto.id} curr={selectedCurrency} price={setCurrency} symbol={crypto.symbol} clicked={clickCrypto} id={crypto.id} name={crypto.name} />)
            })
        }
        
        if (selectedCurrency === 'CNY') {
            spinner = cryptoList.cryptoDataCNY.map(crypto => {
                let setCurrency = Number.parseFloat(crypto.quote.CNY.price.toString()).toFixed(3);
                return (<CryptoItem key={crypto.id} curr={selectedCurrency} price={setCurrency} symbol={crypto.symbol} clicked={clickCrypto} id={crypto.id} name={crypto.name} />)
            })
        }

        
        console.log(cryptoList.cryptoDataCNY);
        console.log(cryptoList.cryptoDataEUR);
        console.log(cryptoList.cryptoDataUSD);
        

        return (
            <div className={classes.cryptolist}>

                <Modal show={cryptoList.cryptoClicked} modalClosed={closeCrypto}>
                    <DetailedCrypto />
                </Modal>
    
                <h1 className={classes.title}>Top 100 list: </h1>
                
                {spinner}
    
    
            </div>
        )
    
    
}

const mapStateToProps = state => {
    return {
        cryptoList: state.fetching ,
        selectedCurrency: state.fetching.currency
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchedCrypto: (curr) => dispatch(fetchCrypto(curr)) ,
        clickCrypto: (id) => dispatch(selectCrypto(id)) ,
        closeCrypto: () => dispatch(cancelCrypto())
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(CryptoList);