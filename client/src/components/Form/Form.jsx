import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postPokemon } from "../../actions"

export function Form(){

    const dispatch = useDispatch()
    const types = useSelector(state => state.allTypes)
    
    const [value, setValue] = useState({
        name:'', //si o si minuscula
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
        <div>
            <h1>Create New Pokemon</h1>
            <form onSubmit={e=>handleSubmit(e)}>
                <label htmlFor="name">Name: </label>
                <input onChange={e=>handleValue(e)} type="text" name="name" id="name" />
                <fieldset>
                    <legend>Stats:</legend>
                    <label htmlFor="life">Life: </label>
                    <input onChange={e=>handleValue(e)} type="range" name="life" id="life" min="1" max="150" />
                    <span>{value.life}</span>
                    <label htmlFor="attack">Attack: </label>
                    <input onChange={e=>handleValue(e)} type="range" name="attack" id="attack" min="1" max="150" />
                    <span>{value.attack}</span>
                    <label htmlFor="defense">Defense: </label>
                    <input onChange={e=>handleValue(e)} type="range" name="defense" id="defense" min="1" max="150" />
                    <span>{value.defense}</span>
                    <label htmlFor="speed">Speed: </label>
                    <input onChange={e=>handleValue(e)} type="range" name="speed" id="speed" min="1" max="150" />
                    <span>{value.speed}</span>
                    <label htmlFor="height">Height: </label>
                    <input onChange={e=>handleValue(e)} type="range" name="height" id="height" min="1" max="150" />
                    <span>{value.height}</span>
                    <label htmlFor="weight">Weight: </label>
                    <input onChange={e=>handleValue(e)} type="range" name="weight" id="weight" min="1" max="150" />
                    <span>{value.weight}</span>
                </fieldset>
                <fieldset>
                    <legend>Types:</legend>
                    {types.map(el=>(
                        <div>
                            <input onChange={e=>handleValue(e)} type="checkbox" value={el} name="type" key={el+"form"}/>
                            <label htmlFor={el}>{el}</label>
                        </div>
                    ))}
                </fieldset>
            <input type="submit" />
            </form>
        </div>
    )
}