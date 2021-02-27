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


export const fetchCrypto = () => {

    return (dispatch) => {
        dispatch(fetchCryptoRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
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