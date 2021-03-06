import s from './home.module.css'
import { useEffect } from 'react'
import {useSelector,useDispatch } from 'react-redux'
import {Card}  from './Card/Card'
import { getPokemons } from '../../actions'
import { Loading } from '../Loading/Loading'

export function Cards() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])


    let renderCards = (useSelector(state => state.allPokemons)).slice(0,12)
    let {filter,page,creator} = useSelector(state => state.filterSearch)

    
    if(page && page.length)renderCards = page
    else if(creator) renderCards =  creator
    else if(filter.length) renderCards = filter.slice(0,12)

    

    return (
        <>
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
                        attack= {el.attack}
                        speed= {el.speed}
                        defense= {el.defense}
                        type= {el.Types}
                        img= {el.img}
                    />
                ))}
            </div>
            :
            <div className={s.containerGif}>
                <Loading/>
            </div>
            }
        </>
        
    )
}
