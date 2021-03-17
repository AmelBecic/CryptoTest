import React, {useState , useEffect} from 'react';
import {connect} from 'react-redux';
import classes from './DetailedCrypto.module.css';


const DetailedCrypto = ({ide , cryptoInfo , currency}) => {

    const [singleCrypto , setSingleCrypto] = useState( {name: 'None' , dailyVolume: ' ' , marketCap: '' , otherInfo: '' , maxSupp: ''} )
    
    useEffect(() => {
        if (currency === 'USD') {
            cryptoInfo.cryptoDataUSD.map(crypto => {
                if(crypto.id === ide) {
                    let marketCapp=Number.parseFloat(crypto.quote.USD.market_cap.toString()).toFixed(3);;
                    let volume = Number.parseFloat(crypto.quote.USD.percent_change_24h.toString()).toFixed(3);
                    setSingleCrypto({name: crypto.name , 
                        marketCap: marketCapp , 
                        dailyVolume: volume , 
                       otherInfo: crypto.total_supply , 
                       maxSupp: crypto.max_supply})
                }
            })
        }
        if (currency === 'EUR') {
            cryptoInfo.cryptoDataEUR.map(crypto => {
                if(crypto.id === ide) {
                    let marketCapp=Number.parseFloat(crypto.quote.EUR.market_cap.toString()).toFixed(3);;
                    let volume = Number.parseFloat(crypto.quote.EUR.percent_change_24h.toString()).toFixed(3);
                    setSingleCrypto({name: crypto.name , 
                        marketCap: marketCapp , 
                        dailyVolume: volume , 
                       otherInfo: crypto.total_supply , 
                       maxSupp: crypto.max_supply})
                }
            })
        }
        if (currency === 'CNY') {
            cryptoInfo.cryptoDataCNY.map(crypto => {
                if(crypto.id === ide) {
                    let marketCapp=Number.parseFloat(crypto.quote.CNY.market_cap.toString()).toFixed(3);;
                    let volume = Number.parseFloat(crypto.quote.CNY.percent_change_24h.toString()).toFixed(3);
                    setSingleCrypto({name: crypto.name , 
                        marketCap: marketCapp , 
                        dailyVolume: volume , 
                       otherInfo: crypto.total_supply , 
                       maxSupp: crypto.max_supply})
                }
            })
        }

        
        
    } , [cryptoInfo , ide , currency])

    let volumeStyle= {
        color: 'green' ,
        display: 'inline'
    }
    if(singleCrypto.dailyVolume < 0) {
        volumeStyle = {
            color: 'red'  ,
            display: 'inline'
        }
    }
    return (
        <div className={classes.detailed}>

            <p className={classes.item}> {singleCrypto.name} </p>
            <p className={classes.item}>ID:  {ide}</p>
            <p className={classes.item}>Market cap: {singleCrypto.marketCap} {currency}</p>
            <p className={classes.item}>Daily volume: <p style={volumeStyle}>{singleCrypto.dailyVolume} %</p></p>
            <p className={classes.item}>Total supply: {singleCrypto.otherInfo}</p>
            <p className={classes.item}>Max supply: {singleCrypto.maxSupp} </p>

        </div>
    )



}

const mapStateToProps = state => {
    return {
        cryptoInfo: state.fetching ,
        ide: state.fetching.id ,
        currency: state.fetching.currency
    }
}


export default connect(mapStateToProps)(DetailedCrypto);