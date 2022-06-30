import {React} from 'react'
import { Cards } from './Cards'
import { Pages } from './Pages'
import { Header } from '../Header/Header'

export function Home(){
    return(
        <div >
            <Header/>
            <Cards/>       
            <Pages/>
       </div>
    )
}