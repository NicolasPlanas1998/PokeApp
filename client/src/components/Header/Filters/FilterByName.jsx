import { useDispatch, useSelector } from "react-redux"
import { searchPokemon } from "../../../actions/index"
import s from './filters.module.css'

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
            <form class={s.formAZ}>
                <input type="radio" onClick={AtoZ} id={s.higher} name="yc-form-switch" value="yes"  />
                    <label for={s.higher} className={s.labelHigher}>
                        <i className="fas fa-sort-alpha-up"></i>
                    </label>
                <input type="radio" onClick={ZtoA}id={s.lower} name="yc-form-switch" value="no" />
                    <label for={s.lower} className={s.labelLower}>
                        <i className="fas fa-sort-alpha-down-alt"></i>
                    </label>
            </form>
        </div>
    )
}