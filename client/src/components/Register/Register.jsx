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

export default function Register() {

    const [formValues, setFormValues] = useState(InitialFormState)
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
            console.log(data)
            saveUserData(data)
        }

        navigate("/catalog")
        setFormValues(InitialFormState)
    }



    return (
        <div className="wrapper">
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
        </div>
    )
}