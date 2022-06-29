import {GET_POKEMONS,
        FILTER_SEARCH,
        GET_TYPES,
        LOG
    } from '../actions';

const initialState = {
    allPokemons: [],
    allTypes: [],
    filterSearch: {
        filter:[],
        page:[] },
    logIn: false
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return {...state, allPokemons: action.payload }
        case GET_TYPES:
            return {...state, allTypes: action.payload }
        case LOG:
            return {...state, logIn: action.log }
        case FILTER_SEARCH:
            return{...state, filterSearch: {
                filter: action.payload.filter,
                page: action.payload.page
            } }
        default:
             return state
    }
}