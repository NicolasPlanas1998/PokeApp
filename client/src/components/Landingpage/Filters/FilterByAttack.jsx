import { useDispatch, useSelector } from "react-redux"
import { searchPokemon } from "../../../actions/index"

export function FilterByAttack(){
    const dispatch = useDispatch()
    const pokemons =  useSelector(state => state.allPokemons)
    const {filter} =  useSelector(state => state.filterSearch)
    
    let pokemonsToOrder = []

    function higher(){
        if(filter.length) pokemonsToOrder = filter
        else pokemonsToOrder = pokemons
        let pokemonsOrdered = pokemonsToOrder.sort(function (a,b){
                return  b.attack - a.attack 
            })
        dispatch(searchPokemon(pokemonsOrdered))

    }
    function lower(){
        if(filter.length) pokemonsToOrder = filter
        else pokemonsToOrder = pokemons
        let pokemonsOrdered = pokemonsToOrder.sort(function (a,b){
                return a.attack - b.attack
            })
        dispatch(searchPokemon(pokemonsOrdered))
    }
    return(
        <div>
           <p>Attack: </p>
            <button onClick={higher}>
                Higher
            </button>
            <button onClick={lower}>
                Lower
            </button>
        </div>
    )
}