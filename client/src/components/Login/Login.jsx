import { useState } from "react"

const InitialFormState = {
    email: "",
    password: "",
}

import "./Login.css"
import { LogValidate } from "../../../api/userService"
import { saveUserData } from "../../../api/sessionStorage"
import { useNavigate } from "react-router-dom"


export default function Loggin() {

    const [formValues, setFormValues] = useState(InitialFormState)
    let [checked, setChecked] = useState(false)
    let navigate = useNavigate()

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
        
        navigate("/catalog")
        setFormValues(InitialFormState)
    }

    function ShowPass(){
        if(checked == false){
            setChecked(true)
        }else {
            setChecked(false)
        }
    }

    return (
        <div className="wrapper">
            {checked
                ?
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
                                type="text"
                                placeholder="Password"
                                name="password"
                                value={formValues.password}
                                onChange={changeHandler}
                                required
                            ></input>
                            <img className="eye" src="/images/eye-icon-1457.png" alt="eye" onClick={ShowPass} />
                        </div>
                        <div className="btndiv">
                            <button type="button" className="btn" onClick={submitForm} >Sign in</button>
                        </div>
                    </form>
                </div>
                :
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
                            <img className="eye" src="/images/eye-icon-1457.png" alt="eye" onClick={ShowPass}/>
                        </div>
                        <div className="btndiv">
                            <button type="button" className="btn" onClick={submitForm} >Sign in</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}



{/* <div className="wrapper">
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
            <div className="btndiv">
                <button type="button" className="btn" onClick={submitForm} >Sign in</button>
            </div>
        </form>
    </div>
</div> */}