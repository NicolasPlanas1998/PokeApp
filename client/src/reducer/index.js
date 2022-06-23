import {GET_POKEMONS,ADD_SEARCH} from '../actions';

const initialState = {
    allPokemons: [],
    search: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload }
        case ADD_SEARCH:
            return{
                ...state,
                search: action.payload
            }
        default:
             return state 
    }
}