import {GET_POKEMONS_BY_NAME,
        GET_API_POKEMONS} from '../actions';

const initialState = {
    pokesNames: [],
    pokesDetail: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_API_POKEMONS:
            return {
                ...state,
                pokesNames: action.payload.results }    
        case GET_POKEMONS_BY_NAME:
            return {
                ...state,
                pokesDetail: {...state.pokesDetail, [action.payload.name]: action.payload} }
        default:
             return state 
    }
    
}