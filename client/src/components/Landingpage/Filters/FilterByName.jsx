import { useDispatch, useSelector } from "react-redux"
import { searchPokemon } from "../../../actions/index"

export function FilterByName(){
    const dispatch = useDispatch()
    const pokemons =  useSelector(state => state.allPokemons)

    function AtoZ(e){
        let a = pokemons.sort(function (a,b){
            return  b.name  - b.name
        }) 
        dispatch(searchPokemon(a))
    }
    function ZtoA(e){
        
    }
    return(
        <div>
            {/* <label htmlFor="">Name</label> */}
            <button onClick={e=> AtoZ(e)}>
                <i class="fas fa-sort-alpha-up"></i>
            </button>
            <button onClick={e=> ZtoA(e)}>
                <i class="fas fa-sort-alpha-down-alt"></i>
            </button>
        </div>
    )
}