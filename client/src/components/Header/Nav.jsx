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
        </nav>
    )
}