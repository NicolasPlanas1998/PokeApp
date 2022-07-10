import pikachuLoading from "../../images/pikachuLoading.gif"
import s from "./loading.module.css"

export function Loading (){
    return(
        <div className={s.container}>
            <img  src={pikachuLoading} alt="Loading" />
        </div>
    )
}