import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postPokemon } from "../../actions"
import s from './form.module.css'

export function Form(){

    const dispatch = useDispatch()
    const types = useSelector(state => state.allTypes)
    
    const [value, setValue] = useState({
        name:'', 
        life: 50,
        attack: 50,
        defense:50,
        speed:50,
        height:50,
        weight:50,
        Types:[]
    })
    function handleValue(e){
        if(e.target.name === "type"){
                setValue({
                    ...value,
                    Types: [...value.Types, e.target.value]
                })
        }else{
            setValue({
                   ...value,
                   [e.target.name]: e.target.value
               })   
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(postPokemon(value))
    }

    return(
        <div className={s.form}>
            <h1>Build your pokemon</h1>
            <form onSubmit={e=>handleSubmit(e)}>
            <input onChange={e=>handleValue(e)} className={s.name}type="text" name="name" id="name" placeholder="Name" required />
                <div className={s.inputs}>
                    <fieldset className={s.stats}>
                        <legend>Stats</legend>
                        <div>
                            <label htmlFor="life">Life: </label>
                            <input onChange={e=>handleValue(e)} type="range" name="life" id="life" min="1" max="150" />
                            <span>{value.life}</span>
                        </div>
                        <div>
                            <label htmlFor="attack">Attack: </label>
                            <input onChange={e=>handleValue(e)} type="range" name="attack" id="attack" min="1" max="150" />
                            <span>{value.attack}</span>
                        </div>
                        <div>
                            <label htmlFor="defense">Defense: </label>
                            <input onChange={e=>handleValue(e)} type="range" name="defense" id="defense" min="1" max="150" />
                            <span>{value.defense}</span>
                        </div>
                        <div>
                            <label htmlFor="speed">Speed: </label>
                            <input onChange={e=>handleValue(e)} type="range" name="speed" id="speed" min="1" max="150" />
                            <span>{value.speed}</span>
                        </div>
                        <div>
                            <label htmlFor="height">Height: </label>
                            <input onChange={e=>handleValue(e)} type="range" name="height" id="height" min="1" max="150" />
                            <span>{value.height}</span>
                        </div>
                        <div>
                            <label htmlFor="weight">Weight: </label>
                            <input onChange={e=>handleValue(e)} type="range" name="weight" id="weight" min="1" max="150" />
                            <span>{value.weight}</span>
                        </div>
                    </fieldset>
                    <fieldset className={s.types}>
                        <legend>Types</legend>
                        {types.map(el=>(
                            <div key={el+"form"}>
                                <input onChange={e=>handleValue(e)} type="checkbox" value={el} id={el} name="type" />
                                <label htmlFor={el}>{el}</label>
                            </div>
                        ))}
                    </fieldset>
                </div>
            <input className={s.formBtn} type="submit"  value="Create"/>
            </form>
        </div>
    )
}