import { bindActionCreators } from "redux";

const initialState = {

    loading : true ,
    cryptoData: [] ,
    error: '' ,
    cryptoClicked: false , 
    id: '' ,
    ime: 'amel'

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
        case 'SELECT_CRYPTO' :
        return {
            ...state ,
            cryptoClicked: true
        }
        case 'CANCEL_CRYPTO' :
        return {
            ...state ,
            cryptoClicked: false
            }
        default:
            return state;
    }


}

export default reducer;