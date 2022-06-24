import {React} from 'react'
import { Cards } from './Cards'
import { Filters } from './Filters/Filters'
// import s from './landingpage.module.css'
import { Pages } from './Pages'

export function Home(){
    return(
        <div >
            <Filters/>
            Paginado: <Pages/>
            <Cards/>

        </div>
    )
}