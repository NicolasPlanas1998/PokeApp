import {React} from 'react'
import {Nav} from './Nav'
import { Search } from './Search'
import s from './header.module.css'

export function Header(){
    return(
        <header className={s.header}>
            <Nav/>
            <Search/>
        </header>
    )
}