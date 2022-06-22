import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../actions'
import {Card}  from '../Card/Card'


export function Cards() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPokemons())
    },[])
    const arrNames = useSelector(state => state.pokesNames)
    return (
        <>
            <h1>Cards</h1>
            {
            arrNames.length < 1 ? 
            <h2> Cargando... </h2> :
                arrNames.map(el =>(
                    <Card pokemon={el.name}/>
                ))
            }
        </>
        
    )
}