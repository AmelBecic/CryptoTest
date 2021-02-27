import { bindActionCreators } from "redux";

const initialState = {

    loading : true ,
    cryptoData: [] ,
    error: ''

}

const reducer = (state= initialState , action) => {

    switch(action.type){
        case 'FETCH_CRYPTO_REQUEST' : 
        return {
            ...state , 
            loading: true
        }
        case 'FETCH_CRYPTO_SUCCESS' : 
        return {
            loading: false ,
            cryptoData: action.payload , 
            error: ''
        }
        case 'FETCH_CRYPTO_FAILURE' :
        return {
            loading: false ,
            cryptoData: [] ,
            error: action.payload ,
        }
        default:
            return state;
    }


}

export default reducer;