import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import s from "./detail.module.css"
import { getPokemons } from "../../actions"
import sword from '../../images/swordsIcon.png'
import { Loading } from "../Loading/Loading"


export function Detail (){
    const {name} = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //In case page is reloaded
    useEffect(()=>{
        return(
            dispatch(getPokemons())
        )},[])

    let pokemons = useSelector(state => state.allPokemons)
    const pokemon = pokemons.filter(el=> el.name === name)
    
    if(pokemons.length > 0){ 
        var {life, img, Types, attack,speed,defense} = pokemon[0]
        var typeName = Types[0].name
        console.log(typeName)
    }



    return(
        <div className={s.container}>
            <button className={s.back} onClick={()=> navigate(-1)}>
                <i className="fa-solid fa-circle-left"></i>
            </button>
            {!pokemons.length?
            <Loading/>
            :
            <div className={`${s.card} ${s[typeName]}`}>
                <h1>{name}</h1>
                <div className={s.cardInfo}>
                    <img src={img} alt="" />
                    <div className={s.stats}>
                        <label htmlFor={life} className={`${s.iconStats} fas fa-heart ${s.heart}`}> {life}</label>
                        <input type="range" min="1" max="100" id={life} value={life} disabled />
                        
                        <div className={s.containerSword}>
                            <img className={s.sword} src={sword} alt="sword" />
                            <span>{attack}</span>
                        </div>
                        <input type="range" min="1" max="100" id={attack} value={attack} disabled />

                        <label htmlFor={defense}  className={`${s.iconStats} fa-solid fa-shield-halved ${s.defense}`}> {defense}</label>
                        <input type="range" min="1" max="100" id={defense} value={defense} disabled />
                        
                        <label htmlFor={speed}  className={`${s.iconStats} fa-solid fa-bolt ${s.speed}`}> {speed}</label>
                        <input type="range" min="1" max="100" id={speed} value={speed} disabled />

                    </div>

                    <p>The name Pokémon is a syllabic abbreviation of the Japanese brand Pocket Monsters.
                     The term "Pokémon", in addition to referring to the Pokémon franchise itself, also 
                     collectively refers to the 905 fictional species that have made appearances in Pokémon 
                     media as of the release of the eighth generation titles Pokémon Sword and Shield</p>
                </div>
            </div>
            }
        </div>
            )
        }