import {React} from 'react'
import s from './header.module.css'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';

export function Nav(){
    return(
        <nav className={s.nav}>
            <Link to='/home'>
                <img src={logo} alt="Logo" id={s.logo} />
            </Link>
        </nav>
    )
}