import { useState } from "react"

import { RegValidate } from "../../../api/userService"
import { saveUserData } from "../../../api/sessionStorage"

const InitialFormState = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "" 
}

export default function Register() {

    const [formValues, setFormValues] = useState(InitialFormState)

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitForm = async () => {
        let res = RegValidate(formValues)

        if( res instanceof Promise){
            let data = await res.json()
            console.log(data)
            saveUserData(data)
        }

        // setFormValues(InitialFormState)
    }



    return (
        <div className="wrapper">
            <form action="POST">
                <h1>Register</h1>
                <div className="input-box">
                    <input 
                    className="input" 
                    name="username" 
                    type="text" 
                    placeholder="Username" 
                    value= {formValues.username}
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
    )
}