import pikachuLoading from "../../images/pikachuLoading.gif"
import loadingCircle from "../../images/loadingCircle.gif"
import s from "./loading.module.css"

export function Loading (){
    return(
        <div className={s.container}>
            <img  src={pikachuLoading} alt="Loading" />
            <img src={loadingCircle} id={s.circle} alt="Loading circle" />
        </div>
    )
}