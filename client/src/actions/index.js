export const GET_API_POKEMONS = "GET_API_POKEMONS"
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME"


// export function getPokemons(payload){
//     return fetch("https://pokeapi.co/api/v2/pokemon" + payload)
//         .then(res=>res.json())
//         .then(r=> console.log(r))
// }

export function getPokemons() { //! Obtengo solo los 40 nombres
    return function(dispatch) {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=40" )
        .then(response => response.json())
        .then(json => dispatch({ type: GET_API_POKEMONS, payload: json }));
    };
}
export function pokemonByName(name) { //!Obtengo la info del pokemon
    return function(dispatch) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then(response => response.json())
        .then(json => dispatch({ type: GET_POKEMONS_BY_NAME, payload: {
            id: json.id,
            name: json.name,
            height: json.height,
            weight: json.weight,
            type: json.types[0].type.name,
            img: json.sprites.back_default
        } }));
    };
}