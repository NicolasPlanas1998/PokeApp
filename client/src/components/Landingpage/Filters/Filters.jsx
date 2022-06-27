import { FilterByType } from "./FilterByType";
import { FilterByCreation } from "./FilterByCreation";
import { FilterByName } from "./FilterByName";
import { FilterByAttack } from "./FilterByAttack";


export function Filters(){
    return(
        <>
          <FilterByType/>
          <FilterByCreation/>
          <FilterByName/>
          <FilterByAttack/>
        </>
    )
}