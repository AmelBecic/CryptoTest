import axios from 'axios';

export const fetchCryptoRequest = () => {
    return {
        type: 'FETCH_CRYPTO_REQUEST'
    }
}

const fetchCryptoSucces = crypto => {

    return {
        type: 'FETCH_CRYPTO_SUCCESS' ,
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

export const fetchCrypto =  (currency) => {

    return (dispatch) => {
        dispatch(fetchCryptoRequest);
        

         axios.get(`https://cryptocurrency-list.herokuapp.com/cryptocurrency${currency}`)
            .then( response => {
                const cryptoData = response.data;
                dispatch(fetchCryptoSucces(cryptoData));
            })
            .catch( error => {
                const errorMsg = error.message;
                dispatch(fetchCryptoFailure(errorMsg));
            })
    }



}