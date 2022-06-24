import React from "react";
import s from "./card.module.css"

export function Card({name, id, life, img,weight, type}){

    let typeId = type[0].name

    return(
        <div className={s.card} id={s[typeId]} key={id}>
            <h5 className={s.titlePokemom}>{name}</h5>
            <div className= {s.containerImg}>
                <img src={img} alt={name} />
            </div>
            <div className={s.containerStats}>
                <div>
                    <p><i className={`${s.iconStats} fas fa-heart`}></i>Life: </p>
                    <span>{life}</span>
                </div>
                <div>
                    <p><i className={`${s.iconStats} fas fa-weight-hanging`}></i>Weight: </p>
                    <span>{weight}</span>
                </div>
                <div>
                    <p><i className={`${s.iconStats} fas fa-layer-group`}></i>Type: </p>
                    {type?type.map(t=>(
                        <span>{t.name}
                     
                        </span>
                    )):<p> . . .</p>}
                </div>
            </div>
        </div>
    )
}




