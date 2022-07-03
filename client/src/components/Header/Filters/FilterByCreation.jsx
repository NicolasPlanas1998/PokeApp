import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchPokemon } from "../../../actions/index"

export function FilterByCreation(){
    const dispatch = useDispatch()

    const pokemons = useSelector(state => state.allPokemons)
    const {filter} =  useSelector(state => state.filterSearch)
    const [renderPokemons, setRenderPokemons ] = useState([])

    useEffect(()=>{
        if(filter.length)  setRenderPokemons(filter)
        else  setRenderPokemons(pokemons)
       
    },[pokemons,filter])


    function handleSelected (e){
        const selected = e.target.value
        let pokeAppCollction = []
        let nintendoCollction = []

        if(selected === "any"){dispatch(searchPokemon({filterObj: {}}))}
        else{ 
            renderPokemons.forEach(el=>{
                let properties = Object.keys(el)
                if(properties.includes("pokeApp")) {
                    pokeAppCollction.push(el)
                }else nintendoCollction.push(el)
            }) 
    
            if(selected === "nintendo")dispatch(searchPokemon({
                filterObj: filter,
                creatorObj: nintendoCollction}))
            else {
                if(!pokeAppCollction.length) alert("There are not Pokemons of this type")
                else{
                    dispatch(searchPokemon({
                    filterObj: filter,
                    creatorObj: pokeAppCollction}))}
                }
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