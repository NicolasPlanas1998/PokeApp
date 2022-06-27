import { useDispatch, useSelector } from "react-redux"
import { searchPokemon } from "../../../actions/index"
import s from './filters.module.css'

export function FilterByAttack(){
    const dispatch = useDispatch()
    const pokemons =  useSelector(state => state.allPokemons)
    const {filter} =  useSelector(state => state.filterSearch)
    
    let pokemonsToOrder = []

    function handleSelected(e){

        let option = e.target.value
        if(option === "higher"){
            if(filter.length) pokemonsToOrder = filter
            else pokemonsToOrder = pokemons
            let pokemonsOrdered = pokemonsToOrder.sort(function (a,b){
                    return  b.attack - a.attack 
                })
            dispatch(searchPokemon(pokemonsOrdered))
        }
        if(option === "lower"){
            if(filter.length) pokemonsToOrder = filter
            else pokemonsToOrder = pokemons
            let pokemonsOrdered = pokemonsToOrder.sort(function (a,b){
                    return a.attack - b.attack
                })
            dispatch(searchPokemon(pokemonsOrdered))
        }
    }
    return(
        <div>
             <select className="filter" onChange={e=> handleSelected(e)}  id={s.containerAttack}>
                <option > Attack</option>
                <option value="higher" > Higher</option>
                <option value="lower"> Lower</option>
            </select>
        </div>
    )
}