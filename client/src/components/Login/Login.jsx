import { useState } from "react"

const InitialFormState = {
    email: "",
    password: "",
}

import "./Login.css"
import { LogValidate } from "../../../api/userService"
import { saveUserData } from "../../../api/sessionStorage"


export default function Loggin() {

    const [formValues, setFormValues] = useState(InitialFormState)
    const [err, seterr] = useState(undefined)

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitForm = async () => {
        let res = LogValidate(formValues)

        if (res instanceof Promise) {
            res = await res
            let data = await res.json()
            saveUserData(data)
        }

        setFormValues(InitialFormState)
    }

    return (
        <div className="wrapper">
            <div className="light">
                <form action="POST">
                    <h1>Sign in</h1>
                    <div className="input-box">
                        <input
                            className="input"
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={formValues.email}
                            onChange={changeHandler}
                            required
                        ></input>
                    </div>
                    <div className="input-box">
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formValues.password}
                            onChange={changeHandler}
                            required
                        ></input>
                    </div>
                    {/* <div className="remember">
                    <input type="checkbox">Remember me</input>
                    <a id="forgor" className="text" href="">Forgot password?</a>
                </div> */}
                    <div className="btndiv">
                        <button type="button" className="btn" onClick={submitForm} >Sign in</button>
                    </div>
                    <div className="register">
                        <p>Don't have an account?</p>
                    </div>
                </form>
            </div>
        </div>
    )
}