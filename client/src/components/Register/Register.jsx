import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { RegValidate } from "../../../api/userService"
import "./Register.css"
import AuthContext from "../../contexts/AuthContext.jsx"


const InitialFormState = {
    username: "",
    email: "",
    password: "",
    repeatPassword: ""
}

export default function Register({ isAuth, setIsAuth }) {

    const [formValues, setFormValues] = useState(InitialFormState)
    const [checked, setChecked] = useState(false)
    const [err, setError] = useState(undefined)
    const { loginRegisterHandler } = useContext(AuthContext)
    let navigate = useNavigate()

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitForm = async () => {
        let res
        let caughtErr
        try {
            res = await RegValidate(formValues)
        }catch(error){
            caughtErr = error.message
        }

        if (caughtErr != undefined) {
            return setError(caughtErr)
        } else {
            setError(undefined)
        }


        let data = await res.json()
        loginRegisterHandler(data)
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
                        {err
                            ?
                            <p className="err">{err}</p>
                            :
                            <p className="err"></p>
                        }
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
                        {err
                            ?
                            <p className="err">{err}</p>
                            :
                            <p className="err"></p>
                        }
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