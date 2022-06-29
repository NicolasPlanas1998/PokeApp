export const GET_POKEMONS = "GET_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const FILTER_SEARCH = "FILTER_SEARCH"
export const LOG = "LOG"

export function getPokemons() { 
    return function(dispatch) {
        return fetch("http://localhost:3001/pokemons" )
            .then(response => response.json())
            .then(json => dispatch({ type: GET_POKEMONS, payload: json }));
        };
}
export function searchPokemon(filterObj,pageObj){   
    return{
        type: FILTER_SEARCH,
        payload: {
            filter: filterObj,
            page: pageObj
        }
    }
}
export function getTypes(){
    return function(dispatch){
        return fetch("http://localhost:3001/types" )
        .then(response => response.json())
        .then(json => dispatch({ type: GET_TYPES, payload: json }));
    };
}
export function postPokemon(data){
    return function (){
        return fetch("http://localhost:3001/pokemons",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }
}
export function log(payload){
    return{
        type: LOG,
        log: payload
    }
}
