import  { useEffect } from 'react'
import s from './landingpage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../actions'
import {Card}  from '../Card/Card'

//Si  mi reducer dice tiene length es porque se busco algo,
//Entonces solo renderizo ese

//El reducer tendra length si se busca en search
export function Cards() {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])

    let pokemon = useSelector(state => state.search)
    let arrNames = useSelector(state => state.allPokemons)
    if(pokemon.length) arrNames= pokemon
    return (
        <>
            <h1>Cards</h1>
            {arrNames.length? 
            <div className={s.containerCards}>
                {arrNames.map(el=>(
                    <Card
                        id={el.id}
                        name={el.name}
                        life={el.life}
                        height={el.height}
                        weight= {el.weight}
                        hp = {el.life}
                        atack= {el.atack}
                        speed= {el.speed}
                        defense= {el.defense}
                        type= {el.type}
                        img= {el.img}
                    />
                ))}
            </div>
            :
            <h4>Cargando...</h4> //! Reemplazar por animacion de loading
            }
        </>
        
    )
}
