import {React,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchPokemon } from '../../actions'
import s from './header.module.css' 


export function Search(){

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const arrPokemons = useSelector(state => state.allPokemons)


    function enter(e){
        setSearch(e.target.value)
            const pokemons = arrPokemons.filter(el=> el.name.includes(search))
            if(!search){
                dispatch(searchPokemon({filterObj: {}}))
            }
            else{
                if(search.length > 1) dispatch(searchPokemon({filterObj:pokemons}))
                else {
                    dispatch(searchPokemon({filterObj:arrPokemons}))
                }
        }
    }
    function handleSearch(){
         const pokemons = arrPokemons.filter(el=> el.name === search)
         if(pokemons.length) dispatch(searchPokemon({filterObj:pokemons}))
         else{alert("Pokemon not found")}
         
    }
    return(
        <div className={s.containerSearch}>
            <input onChange={e=>enter(e)} id={s.searcher} name="searcher" type="search" placeholder='Search pokemon '/>
            <i onClick={handleSearch}className="fas fa-search" id={s.iconSearch}></i>
        </div>
    )}