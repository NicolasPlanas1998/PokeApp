import {React} from 'react'
import { Cards } from './Cards'
import { Filters } from './Filters/Filters'
// import { NavLink } from 'react-router-dom'
// import s from './landingpage.module.css'
import { Pages } from './Pages'
import {Link} from 'react-router-dom';

export function Home(){
    return(
        <div >
            <Link to="/form" >Create Pokemon</Link>
            <Filters/>
            Paginado: <Pages/>
            <Cards/>       
       </div>
    )
}