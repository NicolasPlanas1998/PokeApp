import React from "react";
import s from "./card.module.css"

export function Card({name, id, life, img,weight, type}){
    return(
        <div className={s.card} key={id}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <h3>Life {life}</h3>
            <h3>Weight {weight}</h3>
            {type?type.map(t=>(
                <h3>{t.name}</h3>
            ))
            :
             <h3> . . .</h3>}
        </div>
    )
}




