import {React,useState} from 'react'
import {Nav} from './Nav'
import { Search } from './Search'
import s from './header.module.css'
import { Filters } from './Filters/Filters'
import { Link } from 'react-router-dom'
import { Modal } from './Modal'
import { useSelector } from 'react-redux'

export function Header(){

    const [modal, setModal] = useState(false)
    const logIn = useSelector(state => state.logIn)

    function handleModal(){
        if(modal === false) setModal(true)
        else{setModal(false)}
    }
    return(
        <header className={s.header}>
                {modal && <Modal/> }
                <Nav/>
            <div className={s.inputs}>
                <Search/>
                <Filters />
            </div>
            <div className={s.user}>
                {logIn ?
                 <i class="fa-solid fa-user-check"></i>
                 :
                 <i onClick={handleModal} className="fas fa-user"></i> }
                {/* <Link className={s.user} to="/form" ><i className="fas fa-user"></i></Link> */}
            </div>
        </header>
    )
}