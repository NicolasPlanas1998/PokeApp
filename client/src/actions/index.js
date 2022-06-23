export const GET_POKEMONS = "GET_POKEMONS"
export const ADD_SEARCH = "ADD_SEARCH"
// export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME"


export function getPokemons() { 
    return function(dispatch) {
    return fetch("http://localhost:3001/pokemons" )
        .then(response => response.json())
        .then(json => dispatch({ type: GET_POKEMONS, payload: json }));
    };
}
export function searchPokemon(pokemon){   
    return{
        type: ADD_SEARCH,
        payload: pokemon
    }
}