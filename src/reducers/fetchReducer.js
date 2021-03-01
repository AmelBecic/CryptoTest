import { bindActionCreators } from "redux";

const initialState = {

    loading : true ,
    cryptoData: [] ,
    error: '' ,
    cryptoClicked: false , 
    id: 0 ,
    currency: 'USD'
    

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
            error: '' ,
            id: 0
            
        }
        case 'FETCH_CRYPTO_FAILURE' :
        return {
            loading: false ,
            cryptoData: [] ,
            error: action.payload ,
            id: 0
        }
        case 'SELECT_CRYPTO' :
        return {
            ...state,
            cryptoClicked: true ,
            id: action.payload
            
        }
        case 'CANCEL_CRYPTO' :
        return {
            ...state ,
            id: 0 ,
            cryptoClicked: false
            }
        case 'SELECT_CURRENCY' :
        return {
            ...state , 
            currency: action.payload
        }
        default:
            return state;
    }


}

export default reducer;