import { useState } from "react"

const InitialFormState = {
    username: "",
    password: "",
}

export default function Loggin() {

    const [formValues, setFormValues] = useState(InitialFormState)

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitForm = () => {
        console.log(formValues)
        setFormValues(InitialFormState)
    }

    return (
        <div className="wrapper">
            <form action="POST">
                <h1>Sign in</h1>
                <div className="input-box">
                    <input 
                    className="input" 
                    type="text" 
                    placeholder="Username" 
                    name="username"
                    value={formValues.username}
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
    )
}