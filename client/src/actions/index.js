import axios from "axios"
export const GET_POKEMONS = "GET_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const FILTERS = "FILTERS"
export const LOG = "LOG"


export  function getPokemons(){
    return async function (dispatch){
        const info = await axios.get("/pokemons");
        return dispatch({
            type: GET_POKEMONS,
            payload: info.data 
        })
    }
}

export function searchPokemon(obj){   
    return{
        type: FILTERS,
        filter: obj.filterObj,
        page: obj.pageObj,
        creator: obj.creatorObj
    }
}

export  function getTypes(){
    return async function (dispatch){
        const info = await axios.get("/types");
        return dispatch({
            type: GET_TYPES,
            payload: info.data 
        })
    }
}
export  function postPokemon(data){
    return async function (){
        await axios.post("/pokemons", 
        data);
    }
}
export function log(payload){
    return{
        type: LOG,
        log: payload
    }
}
