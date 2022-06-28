import s from './header.module.css' 
import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'


export function Modal(){

    const [error, setError] = useState({
        username:'',
        password:''
    })
    const [className, setClassName] = useState("flex")
    const [loggedIn, setlog] = useState(false)
    const [input, setInput] = useState({
        username:'',
        password:'',
        
    })
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function handleClose(){
        if(className === "flex") setClassName("none")
        else{setClassName("flex")}
    }
     function handleSubmit(e){
        e.preventDefault()
        if(input.username === "SoyHenry" && input.password === "123456"){
            setlog(true)
            setClassName("none")
        }
        else{
            if(input.username !== "SoyHenry") setError({username:'Username is not valid'})
            else if(input.password !== "123456")setError({password:'Password is not valid'})
        }
    }



    return(
        <div className={`${s.containerModal} ${s[className]} `}>
           <div className={s.modal}>
                <div onSubmit={handleClose} className={s.close}>
                    <i className="fas fa-times"></i>
                </div>
                <h1>Log In</h1>
                <form onSubmit={e=>handleSubmit(e)}>
                <label htmlFor="username">User</label>
                <div className={s.containerInput}>
                    <div>
                        <i className="fas fa-user"></i>
                        <input onChange={e=>handleChange(e)} type="text" name="username" id="username" placeholder='Username' required/>
                    </div>
                    <span className={s.error}>{error.username }</span>
                </div>
                <label htmlFor="password">Password</label>
                <div className={s.containerInput}>
                    <div>
                        <i className="fas fa-lock"></i>
                        <input onChange={e=>handleChange(e)} type="password" name="password" id="password" placeholder='password' required/>
                    </div>
                    <span className={s.error}>{error.password}</span>
                </div>
                <div>
                    <input type="submit" id={s.submitForm} value="Log In" />
                </div>
                </form>
                {loggedIn && <Navigate to="/form"/>}
           </div>
        </div>
    )
}