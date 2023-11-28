import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { RegValidate } from "../../../api/userService"
import { saveUserData } from "../../../api/sessionStorage"
import "./Register.css"

const InitialFormState = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "" 
}

export default function Register({ isAuth, setIsAuth }) {

    const [formValues, setFormValues] = useState(InitialFormState)
    const [checked, setChecked] = useState(false)
    let navigate = useNavigate()

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitForm = async () => {
        let res = RegValidate(formValues)

        if( res instanceof Promise){
            res = await res
            let data = await res.json()
            saveUserData(data)
            setIsAuth(true)
        }

        navigate("/catalog")
        setFormValues(InitialFormState)
    }

    function ShowPass() {
        if (checked == false) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    }

    return (
        <div className="wrapper">
            {checked
                ?
                <div className="light">
                    <form action="POST">
                        <h1>Register</h1>
                        <div className="input-box">
                            <input
                                className="input"
                                name="username"
                                type="text"
                                placeholder="Username"
                                value={formValues.username}
                                onChange={changeHandler}
                                required
                            ></input>
                        </div>
                        <div className="input-box">
                            <input
                                className="input"
                                name="email"
                                type="text"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={changeHandler}
                                required
                            ></input>
                        </div>
                        <div className="input-box">
                            <input
                                className="input"
                                name="password"
                                type="text"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={changeHandler}
                                required
                            ></input>
                            <img className="eye" src="/images/eye-icon-1457.png" alt="eye" onClick={ShowPass} />
                        </div>
                        <div className="input-box">
                            <input
                                className="input"
                                name="repeatPassword"
                                type="password"
                                placeholder="Repeat password"
                                value={formValues.repeatPassword}
                                onChange={changeHandler}
                                required
                            ></input>
                        </div>
                        <div className="btndiv">
                            <button type="button" className="btn" onClick={submitForm} >Register</button>
                        </div>
                    </form>
                </div>
                :
                <div className="light">
                    <form action="POST">
                        <h1>Register</h1>
                        <div className="input-box">
                            <input
                                className="input"
                                name="username"
                                type="text"
                                placeholder="Username"
                                value={formValues.username}
                                onChange={changeHandler}
                                required
                            ></input>
                        </div>
                        <div className="input-box">
                            <input
                                className="input"
                                name="email"
                                type="text"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={changeHandler}
                                required
                            ></input>
                        </div>
                        <div className="input-box">
                            <input
                                className="input"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={changeHandler}
                                required
                            ></input>
                            <img className="eye" src="/images/eye-icon-1457.png" alt="eye" onClick={ShowPass} />
                        </div>
                        <div className="input-box">
                            <input
                                className="input"
                                name="repeatPassword"
                                type="password"
                                placeholder="Repeat password"
                                value={formValues.repeatPassword}
                                onChange={changeHandler}
                                required
                            ></input>
                        </div>
                        <div className="btndiv">
                            <button type="button" className="btn" onClick={submitForm} >Register</button>
                        </div>
                    </form>
                </div>
            }
            
        </div>
    )
}