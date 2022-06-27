import { FilterByType } from "./FilterByType";
import { FilterByCreation } from "./FilterByCreation";
import { FilterByName } from "./FilterByName";
import { FilterByAttack } from "./FilterByAttack";
import s from './filters.module.css'


export function Filters(){
    return(
        <div className={s.filtersContainer}>
          <FilterByType/>
          <FilterByCreation/>
          <FilterByAttack/>
          <FilterByName/>
        </div>
    )
}