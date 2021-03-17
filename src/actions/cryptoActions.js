import axios from 'axios';

export const fetchCryptoRequest = () => {
    return {
        type: 'FETCH_CRYPTO_REQUEST'
    }
}

const fetchCryptoUSD = crypto => {

    return {
        type: 'FETCH_CRYPTO_USD' ,
        payload: crypto
    }
}
const fetchCryptoCNY = crypto => {

    return {
        type: 'FETCH_CRYPTO_CNY' ,
        payload: crypto
    }
}
const fetchCryptoEUR = crypto => {

    return {
        type: 'FETCH_CRYPTO_EUR' ,
        payload: crypto
    }
}

const fetchCryptoFailure = error => {

    return {
        type: 'FETCH_CRYPTO_FAILURE' ,
        payload: error
    }
}

export const selectCrypto = (value) => {
    return {
        type: 'SELECT_CRYPTO' ,
        payload: value
        
    }
}

export const cancelCrypto = () => {
    return {
        type: 'CANCEL_CRYPTO'
    }
}

export const selectCurr = (curr) => {
    return {
        type: 'SELECT_CURRENCY' ,
        payload: curr
    }
}

export const fetchCrypto =  (currency) =>  {

    return async (dispatch) => {
        dispatch(fetchCryptoRequest);
        

         let resUSD = await axios.get(`https://cryptocurrency-list.herokuapp.com/cryptocurrencyUSD`);
         let dataUSD = resUSD.data;
         console.log(dataUSD);
         dispatch(fetchCryptoUSD(dataUSD));

         let resEUR = await axios.get(`https://cryptocurrency-list.herokuapp.com/cryptocurrencyEUR`);
         let dataEUR = resEUR.data;
         console.log(dataEUR);
         dispatch(fetchCryptoEUR(dataEUR));

         let resCNY = await axios.get(`https://cryptocurrency-list.herokuapp.com/cryptocurrencyCNY`);
         let dataCNY = resCNY.data;
         console.log(dataCNY);
         dispatch(fetchCryptoCNY(dataCNY));
    }



}