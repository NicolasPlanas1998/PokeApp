import {React} from 'react'
import s from './header.module.css'
import logo from '../../images/logo.png'
import {NavLink} from 'react-router-dom';

export function Nav(){
    return(
        <nav className={s.nav}>
            <NavLink to='/home'>
                <img src={logo} alt="Logo" id={s.logo} />
            </NavLink>
            <ul className={s.navContainer}>
                {/* Estos links en un futuro quiero que sean filtros por tipo */}
                <li className={s.navLink}><a href='/home'>ICE</a></li>
                <li className={s.navLink}><a href='/home'>WATER</a></li>
                <li className={s.navLink}><a href='/home'>ELECTRIC</a></li>
                <li className={s.navLink}><a href='/home'>FIRE</a></li>
            </ul>
        </nav>
    )
}