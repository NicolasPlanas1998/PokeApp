import { useDispatch, useSelector } from 'react-redux'
// import s from './landingpage.module.css'
import { searchPokemon } from "../../actions"

export function Pages(){
    const allPokemons =  useSelector(state => state.allPokemons)
    const {filter} = useSelector(state => state.filterSearch)
    const dispatch = useDispatch()  
    let pages = []
    let pokemons = []
    
    if(Array.isArray(filter) && filter.length > 0 ) pokemons = filter
    else{ pokemons = allPokemons}

    //! Total pages  
    const totalPages = Math.ceil((pokemons.length) /12)
    for(let i = 1; totalPages >= i;i++){
        pages.push(<input key={i} type="button" onClick={e=>handlePages(e)} value={i} />)
    }

    function handlePages(e){
        let pageNumber= e.target.value
        let firstIndex = (pageNumber * 12) - 12 
        let lastIndex = pageNumber * 12
        let pokemonsPerPage = pokemons.slice(firstIndex,lastIndex)
        dispatch(searchPokemon(filter,pokemonsPerPage))
    }
     return(
         <div>
            {pages}
         </div>
     )

}