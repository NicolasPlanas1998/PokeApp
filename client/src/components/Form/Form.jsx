import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postPokemon } from "../../actions"
import s from './form.module.css'
import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import { Header } from "../Header/Header"
import { Loading } from "../Loading/Loading"

export function Form(){

    const dispatch = useDispatch()
    const types = useSelector(state => state.allTypes)
    const pokemons = useSelector(state => state.allPokemons)

    const [error, setError] = useState({})
    const [value, setValue] = useState({
        name:'', 
        life: 50,
        attack: 50,
        defense:50,
        speed:50,
        height:50,
        weight:50,
        img:'',
        Types:[]
    })
    function handleValue(e){
        if(e.target.name === "type"){
                console.log(e.target.checked)
                if(e.target.checked){
                    setValue({...value, Types: [...value.Types, e.target.value]})
                }else{
                    //In the case they unchecked something
                    let checkedTypes = (value.Types).filter(el => el !== e.target.value)
                    setValue({...value, Types: checkedTypes })
                }
        }else{
            setValue({
                   ...value,
                   [e.target.name]: e.target.value
               })   
        }

    }
    //continue coding the error and add to the handlevlaue
    function validate(value){
        let errors = {}
        if(value.Types.length <= 0) errors["type"] = "Please select at least one type"
        if(!(value.img).includes("https://")) errors["url"] = "Please insert a correct URL"
        if(value.name){
            let alreadyExist = pokemons.filter(el=> el.name === value.name)
            if(alreadyExist) errors["name"] = "Thhis name already exist"
        }
        return errors
        
    }
    function handleSubmit(e){
        e.preventDefault()
        value.name = value.name.toLowerCase()
        console.log(value)
        let err = validate({...value,
            [e.target.name]: e.target.value})
        setError(err)
        if(!Object.keys(err).length){
            dispatch(postPokemon(value))
            alert("Posted")
        }

    }

    return(
        <>
            <Header/>
            <div className={s.form}>
                <h1>Create your pokemon</h1>
                {types.length ? 
                <form onSubmit={e=>handleSubmit(e)}>
                    <div className={s.bodyForm}>
                        <div className={`${s.step} ${s.stepOne}`}>
                            <img src={one} alt="One" className={s.numbers} />
                            <h2>Information</h2>
                            <div>
                                {error.name && <span className={s.err}>{error.name}</span>}
                                <input onChange={e=>handleValue(e)} className={s.basics} type="text" name="name" id="name" placeholder="Name" required />
                                {error.url && <span className={s.err}>{error.url}</span>}
                                <input onChange={e=>handleValue(e)} className={s.basics} type="text" name="img" placeholder="Image URL" required />
                            </div>
                        </div>
                        <div className={`${s.step} ${s.stepTwo}`}>
                            <img src={two} alt="two" className={s.numbers} />
                            <h2>Statistics</h2>
                            <div className={s.stats}>
                                <div>
                                    <label htmlFor="life">Life:  <span>{value.life}</span> </label>
                                    <input onChange={e=>handleValue(e)} type="range" name="life" id="life" min="1" max="150" />
                                </div>
                                <div>
                                    <label htmlFor="attack">Attack: <span>{value.attack}</span></label>
                                    <input onChange={e=>handleValue(e)} type="range" name="attack" id="attack" min="1" max="150" />
                                </div>
                                <div>
                                    <label htmlFor="defense">Defense:  <span>{value.defense}</span></label>
                                    <input onChange={e=>handleValue(e)} type="range" name="defense" id="defense" min="1" max="150" />

                                </div>
                                <div>
                                    <label htmlFor="speed">Speed: <span>{value.speed}</span></label>
                                    <input onChange={e=>handleValue(e)} type="range" name="speed" id="speed" min="1" max="150" />

                                </div>
                                <div>
                                    <label htmlFor="height">Height:  <span>{value.height}</span></label>
                                    <input onChange={e=>handleValue(e)} type="range" name="height" id="height" min="1" max="150" />

                                </div>
                                <div>
                                    <label htmlFor="weight">Weight:  <span>{value.weight}</span> </label>
                                    <input onChange={e=>handleValue(e)} type="range" name="weight" id="weight" min="1" max="150" />
                                </div>
                            </div>
                        </div>
                        <div className={`${s.step} ${s.stepThree}`}>
                            <img src={three} alt="Three" className={s.numbers} />
                            <h2>Types</h2>
                            {error.type && <span className={s.err}>{error.type}</span>}
                            <div className={s.types}>
                                {types.map(el=>(
                                    <div key={el+"form"}>
                                        <input onChange={e=>handleValue(e)} type="checkbox" value={el}   name="type" />
                                        <label htmlFor={el}>{el}</label>
                                    </div>
                                ))}
                            </div>
                        </div>       
                    </div>     
                <input className={s.formBtn} type="submit"  value="Create"/>
                </form>
                :
                <Loading/>
                }
            </div>
        </>
    )
}