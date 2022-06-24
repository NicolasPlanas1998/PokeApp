const URL_API = "https://pokeapi.co/api/v2/pokemon/"
const axios = require('axios');
const {Pokemon,Type} = require('../db')


async function pokemonInfo (url){
    const pokemon = await axios.get(url)
    const obj = pokemon.data
    let pokemonDetail = {
        id: obj.id,
        name: obj.name,
        height: obj.height,
        weight: obj.weight,
        life: obj.stats[0].base_stat,
        atack: obj.stats[1].base_stat,
        defense: obj.stats[2].base_stat,
        speed: obj.stats[5].base_stat, 
        Types: obj.types.map( el=>{return{ name:el.type.name}}),
        img: obj.sprites.front_default
    }
    return pokemonDetail
    //! Retorna:
    // {
    //     "id": 1,
    //     "name": "bulbasaur",
    //     "height": 7,
    //     "weight": 69,
    //     "type": "grass",
    //     "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    // }
}

async function getAPIpokemons (){
    const api = (await axios.get(URL_API+"?limit=40")).data.results
    const apiDetail =  api.map( el =>{
        return {
            name : el.name,
            urlInfo : el.url
        }
    })
    let arrPokemons = []
    for(let i=0; apiDetail.length> i; i++){
        arrPokemons.push(
            await pokemonInfo(apiDetail[i].urlInfo)
        )
    }
    return arrPokemons 
}

async function getDbPokemon(){
    return await Pokemon.findAll({
        include:{
            model: Type,                 // Que otra tabla quiero traer
            attributes: ['name'],        //Que atributos quiero traer de esa tabla
            through: {
                attributes: []         
            }
        }
    })
}

async function getAll(){
    const apiPokemons = await getAPIpokemons()
    const dbPokemons  = await getDbPokemon()
    return  apiPokemons.concat(dbPokemons)
}

module.exports = {
    getAPIpokemons,
    getAll,
} 