import { FilterByType } from "./FilterByType";
import { FilterByCreation } from "./FilterByCreation";
import { FilterByName } from "./FilterByName";


export function Filters(){
    return(
        <>
          <FilterByType/>
          <FilterByCreation/>
          <FilterByName/>
        </>
    )
}