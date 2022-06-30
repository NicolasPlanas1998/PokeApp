import React from "react"
import notFound from "../../images/notFound.webp"
import s from "./notFound.module.css"
import { Link } from "react-router-dom"

export function Error404(){
    return(
        <div className={s.layout}>
            <img src={notFound} alt="Page not found" id={s.notFoundBg} />
            <div className={s.container}>
                <h1>PAGE NOT FOUND</h1>
                <p>Sorry! The page you are looking is not here</p>
                <button>
                    <Link to="/home" className={s.link}>
                        Back Home
                    </Link>
                </button>
            </div>
        </div>
    )
}