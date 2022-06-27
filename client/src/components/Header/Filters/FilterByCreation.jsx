import { useDispatch, useSelector } from "react-redux"
import { searchPokemon } from "../../../actions/index"

export function FilterByCreation(){
    const dispatch = useDispatch()

    const pokemons = useSelector(state => state.allPokemons)
    function handleSelected (e){
        const selected = e.target.value
        let pokeAppCollction = []
        let nintendoCollction = []
        
        if(selected === "any"){dispatch(searchPokemon([],[]))}
        else{
            pokemons.forEach(el=>{
                let properties = Object.keys(el)
                if(properties.includes("pokeApp")) {
                    pokeAppCollction.push(el)
                }else nintendoCollction.push(el)
            }) 
    
            if(selected === "nintendo")dispatch(searchPokemon(nintendoCollction))
            else dispatch(searchPokemon(pokeAppCollction))
        }
}
    return(
        <div>
            <select className="filter" onChange={e=> handleSelected(e)} id="created">
                <option value="any">Creator</option>
                <option value="any">Any</option>
                <option value="nintendo">Nintendo</option>
                <option value="pokeApp">PokeApp</option>
           </select>
        </div>
    )
}