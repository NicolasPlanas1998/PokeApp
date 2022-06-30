import React from "react"
import bg from "../../images/bgLanding.jpeg"
import s from "./landingpage.module.css"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons,getTypes } from '../../actions'

export function Landingpage(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons())
        dispatch(getTypes())
    },[dispatch])
    return(
        <div className={s.bgLanding}>
            <img src={bg} className={s.bg} alt="Background pokemons"  />
            {/* Arreglar src name y agregar alt */}
            <div className={s.container}>
                <img src={logo} alt="Pokemon logo" />
                <div className={s.containerBtn}>
                        <Link to='/home' className={s.link}>
                        </Link>
                </div>
            </div>
        </div>
    )
}

