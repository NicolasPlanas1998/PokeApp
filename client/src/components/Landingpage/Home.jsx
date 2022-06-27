import {React} from 'react'
import { Cards } from './Cards'
import { Filters } from './Filters/Filters'
// import { NavLink } from 'react-router-dom'
import s from './landingpage.module.css'
import { Pages } from './Pages'

export function Home(){
    return(
        <div >

            <Cards/>       
            <Pages/>
       </div>
    )
}