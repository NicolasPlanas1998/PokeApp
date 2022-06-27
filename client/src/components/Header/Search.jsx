import {React,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchPokemon } from '../../actions'
import s from './header.module.css' 


export function Search(){

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')


    const arrPokemons = useSelector(state => state.allPokemons)
    //! ARREGLAR, REEMPLAZAR POR LA RUTA QUE CREE DEL BACK
    function enter(e){
        setSearch(e.target.value)
        if(e.code === "Enter"){
            const pokemons = arrPokemons.filter(el=> el.name === search)
            if(!search){
                dispatch(searchPokemon([],[]))
                }
            else{
                if(pokemons.length) dispatch(searchPokemon(pokemons))
                else {
                    alert("Poke no encontrado(Agregar una alerta linda despues)")
                    dispatch(searchPokemon(pokemons))
                }
            }
        }
    }
    return(
        <div className={s.containerSearch}>
            <input onKeyUp={e=>enter(e)} id={s.searcher} name="searcher" type="search" placeholder='Search pokemon '/>
            <i className="fas fa-search" id={s.iconSearch}></i>
        </div>
    )}