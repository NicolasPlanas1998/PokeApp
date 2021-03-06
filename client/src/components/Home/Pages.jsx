import { useDispatch, useSelector } from 'react-redux'
import s from './home.module.css'
import { searchPokemon } from "../../actions"
import { useState } from 'react'

export function Pages(){

    const [actualPage, setActualPage] = useState(1)
    const allPokemons =  useSelector(state => state.allPokemons)
    const {filter,creator} = useSelector(state => state.filterSearch)

    const dispatch = useDispatch()  
    let pages = []
    let pokemons = []
    
    if(creator) pokemons = creator
    else if(filter.length) pokemons = filter
    else{ pokemons = allPokemons}

    // Total pages  
    const totalPages = Math.ceil((pokemons.length) /12)
    for(let i = 1; totalPages >= i;i++){
        pages.push(<input className={s.page} key={i} type="button" onClick={e=>handlePages(e)} value={i} />)
    }
    function handleSequence(arg){
        let pageNumber
        if(arg === "next" ) { 
            pageNumber = actualPage + 1
            setActualPage(parseInt(pageNumber))
        }else if(arg === "prev" ){ 
            pageNumber = actualPage - 1
            setActualPage(parseInt(pageNumber))}

        let firstIndex = (pageNumber * 12) - 12 
        let lastIndex = pageNumber * 12
        let pokemonsPerPage = pokemons.slice(firstIndex,lastIndex)
        if(actualPage >= 1 && actualPage < totalPages){dispatch(searchPokemon({
            filterObj: filter,
            pageObj: pokemonsPerPage
        }))}
    }
    function handlePages(e){
        let pageNumber = e.target.value
        setActualPage(parseInt(pageNumber))
        let firstIndex = (pageNumber * 12) - 12 
        let lastIndex = pageNumber * 12
        let pokemonsPerPage = pokemons.slice(firstIndex,lastIndex)
        dispatch(searchPokemon({
            filterObj: filter,
            pageObj: pokemonsPerPage
        }))
    }
     return(
         <div className={s.containerPages}>
            {
                pages.length?
                    <div>
                    <input type="button" onClick={() => handleSequence("prev")} value="<" className={s.move}/>
                    {pages}
                    <input type="button" onClick={()=> handleSequence("next")} value=">" className={s.move}/>
                    </div>
                :
                <div></div>

            }
         </div>
     )

}