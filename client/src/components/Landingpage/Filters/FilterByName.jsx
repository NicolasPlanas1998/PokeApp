import { useDispatch, useSelector } from "react-redux"
import { searchPokemon } from "../../../actions/index"

export function FilterByName(){
    const dispatch = useDispatch()
    const pokemons =  useSelector(state => state.allPokemons)
    const {filter} =  useSelector(state => state.filterSearch)
    
    let pokemonsToOrder = []

    function AtoZ(){
        if(filter.length) pokemonsToOrder = filter
        else pokemonsToOrder = pokemons
        let pokemonsOrdered = pokemonsToOrder.sort(function (a,b){
                if(b.name > a.name){
                    return -1
                }
                if(a.name > b.name){
                    return 1
                }return 0
            })
        dispatch(searchPokemon(pokemonsOrdered))
    }
    function ZtoA(){
        if(filter.length) pokemonsToOrder = filter
        else pokemonsToOrder = pokemons
        let pokemonsOrdered = pokemonsToOrder.sort(function (a,b){
                if(b.name > a.name){
                    return 1
                }
                if(a.name > b.name){
                    return -1
                }return 0
            })
        dispatch(searchPokemon(pokemonsOrdered))
    }
    return(
        <div>
            {/* <label htmlFor="">Name</label> */}
            <button onClick={AtoZ}>
                <i className="fas fa-sort-alpha-up"></i>
            </button>
            <button onClick={ZtoA}>
                <i className="fas fa-sort-alpha-down-alt"></i>
            </button>
        </div>
    )
}