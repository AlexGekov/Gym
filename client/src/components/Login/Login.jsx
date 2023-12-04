import { useState, useContext } from "react"
import "./Login.css"
import { Login } from "../../../api/userService"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext.jsx"

const InitialFormState = {
    email: "",
    password: "",
}


export default function Loggin() {

    const [formValues, setFormValues] = useState(InitialFormState)
    const [checked, setChecked] = useState(false)
    const [err, setErr] = useState(undefined)
    const {loginRegisterHandler} = useContext(AuthContext)
    let navigate = useNavigate()

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitForm = async () => {
        let res = await Login(formValues)
        let data = await res.json()

        if(!res.ok){
            return setErr(data.message)
        }else{
            setErr(undefined)
        }

        loginRegisterHandler(data)
        setFormValues(InitialFormState)
        navigate("/catalog")
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
                        {err
                            ?
                            <p className = "err">{err}</p>
                            :
                            <p className="err"></p>
                        }
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
                        {err
                            ?
                            <p className="err">{err}</p>
                            :
                            <p className="err"></p>
                        }
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