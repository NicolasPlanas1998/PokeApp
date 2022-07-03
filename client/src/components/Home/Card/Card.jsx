import React from "react";
import s from "./card.module.css"
import {Link} from "react-router-dom"
import sword from '../../../images/swordsIcon.png'


export function Card({name, id, life, img,weight, type, attack,speed,defense,height}){

    let typeId = type[0].name

    return(
        <Link to={"/home/"+name} className={s.link}>
            <div className={s.card} id={s[typeId]} key={id}>
                <h5 className={s.titlePokemom}>{name}</h5>
                <div className={s.impStats}>
                    <div className={s.imp}>
                        <p><i className={`${s.iconStats} fas fa-heart ${s.heart}`}></i> </p>
                        <span>{life}</span>
                    </div>
                    <div className={s.imp}>
                        <p><i className={`${s.iconStats} fa-solid fa-shield-halved ${s.defense}`}></i> </p>
                        <span>{defense}</span>
                    </div>
                    <div className={s.imp}>
                        <img className={s.sword} src={sword} alt="sword" />
                        <span>{attack}</span>
                    </div>
                </div>
                <div className= {s.containerImg}>
                    <img src={img} alt={name} />
                </div>
                <div className={s.containerStats}>
                    <div>
                        <p><i className={`${s.iconStats} fas fa-weight-hanging`}></i>Weight: </p>
                        <span>{weight}</span>
                    </div>    
                    <div>
                        <p><i className={`${s.iconStats} fa-solid fa-up-down`}></i>height: </p>
                        <span>{height}</span>
                    </div>    
                    <div>
                        <p><i className={`${s.iconStats} fa-solid fa-bolt`}></i>Speed: </p>
                        <span>{speed}</span>
                    </div>    
                    <div >
                       <p><i className={`${s.iconStats} fas fa-layer-group`}></i>Type: </p>
                        {type?type.map(t=>{
                            let typeHtml =  t.name + " "
                            return ( typeHtml)
                        }
                       ):<p> . . .</p>}
                    </div>
                </div>
            </div>
        </Link>
    )
}




