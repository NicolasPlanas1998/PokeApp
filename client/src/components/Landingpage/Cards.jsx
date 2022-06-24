import  { useEffect } from 'react'
import s from './landingpage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../actions'
import {Card}  from './Card/Card'

export function Cards() {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])

    let renderCards = (useSelector(state => state.allPokemons)).slice(0,12)
    let {filter,page} = useSelector(state => state.filterSearch)

    if(page)renderCards = page
    if(Array.isArray(filter) && !page) renderCards = filter
    

    return (
        <>
            <h1>Cards</h1>
            {renderCards.length? 
            <div className={s.containerCards}>
                {renderCards.map(el=>(
                    <Card
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        life={el.life}
                        height={el.height}
                        weight= {el.weight}
                        hp = {el.life}
                        atack= {el.atack}
                        speed= {el.speed}
                        defense= {el.defense}
                        type= {el.Types}
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
