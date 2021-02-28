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

export const selectCrypto = () => {
    return {
        type: 'SELECT_CRYPTO' , 
        
    }
}

export const cancelCrypto = () => {
    return {
        type: 'CANCEL_CRYPTO'
    }
}

export const fetchCrypto = () => {

    return (dispatch) => {
        dispatch(fetchCryptoRequest);
        let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
        let apiKey = "67b3c734-6fa1-4f3a-91e8-86e829bc3542";
        let qString = "?CMC_PRO_API_KEY=" + apiKey + "&start=1&limit=5&convert=USD";

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then( response => {
                const cryptoData = response.data;
                console.log(cryptoData);
                dispatch(fetchCryptoSucces(cryptoData));
            })
            .catch( error => {
                const errorMsg = error.message;
                dispatch(fetchCryptoFailure(errorMsg));
            })
    }



}