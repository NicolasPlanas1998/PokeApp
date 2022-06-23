import {React,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchPokemon } from '../../actions'
// import s from './header.module.css' comento porque no lo estoy usando aun

export function Search(){

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')


    const arrPokemons = useSelector(state => state.allPokemons)

    function enter(e){
        setSearch(e.target.value)
        if(e.code === "Enter"){
            const pokemon = arrPokemons.filter(el=> el.name === search)
            if(!search){dispatch(searchPokemon([]))}
            else{
                if(pokemon.length) dispatch(searchPokemon(pokemon))
                else {
                    alert("Poke no encontrado(Agregar una alerta linda despues)")
                    dispatch(searchPokemon([]))
                }
            }
        }
    }
    return(
        <div>
            <input onKeyUp={e=>enter(e)} name="searcher"   type="search" />
        </div>
    )}