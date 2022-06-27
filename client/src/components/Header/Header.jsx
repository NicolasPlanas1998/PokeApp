import {React} from 'react'
import {Nav} from './Nav'
import { Search } from './Search'
import s from './header.module.css'
import { Filters } from '../Landingpage/Filters/Filters'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <header className={s.header}>
                <Nav/>
            <div className={s.inputs}>
                <Search/>
                <Filters />
            </div>
            <div>
                <Link className={s.user} to="/form" ><i className="fas fa-user"></i></Link>
            </div>
        </header>
    )
}