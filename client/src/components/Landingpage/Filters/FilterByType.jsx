import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTypes, searchPokemon } from "../../../actions"

export function FilterByType(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTypes())
    },[])
    const types = useSelector(state => state.allTypes)
    const pokemons = useSelector(state => state.allPokemons)

    function handleSelected (e){
        const selected = e.target.value
        let pokemonsByType = []

        if(selected === "all"){dispatch (searchPokemon(pokemons))}
        else{
            pokemons.forEach(el=>{
                for(let i=0; el.Types.length > i; i++){
                    if(el.Types[i].name === selected){
                        pokemonsByType.push(el)
                    }}
                })
            dispatch(searchPokemon(pokemonsByType))
        }
    }
    return(
        <div>
            <label htmlFor="types">Type of Pokemon: </label>
            <select onChange={e=> handleSelected(e)} name="" id="types">
                <option key="all" value="all"> All</option>
                {types.map(el=>(
                    <option key={el} value={el}>{el}</option>
                ))}
                </select>
        </div>
    )
}