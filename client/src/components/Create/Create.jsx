import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Create } from "../../../api/postService"
import AuthContext from "../../contexts/AuthContext.jsx"

const InitialFormState = {
    kind: "",
    name: "",
    manufacturer: "",
    description: "",
    image: "",
}

import "./Create.css"

export default function CreateForm() {

    const [formValues, setFormValues] = useState(InitialFormState)
    const [err, setErr] = useState(undefined)
    const { auth } = useContext(AuthContext)
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
            console.log('pre')
            res = await Create(formValues, auth)
            console.log("about to nav")
            navigate("/catalog")
            setFormValues(InitialFormState)
        } catch (error) {
            caughtErr = error.message
            return setErr(caughtErr)
        }
    }

    return (
        <div className="wrapper">
            <div className="light">
                <form action="POST">
                    <h1>Create Post</h1>
                    {err
                        ?
                        <p className="err">{err}</p>
                        :
                        <p className="err"></p>
                    }
                    <div className="input-box">
                        <input
                            className="input"
                            name="kind"
                            type="text"
                            placeholder="Kind"
                            value={formValues.kind}
                            onChange={changeHandler}
                            required
                        ></input>
                    </div>
                    <div className="input-box">
                        <input
                            className="input"
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={formValues.name}
                            onChange={changeHandler}
                            required
                        ></input>
                    </div>
                    <div className="input-box">
                        <input
                            className="input"
                            name="manufacturer"
                            type="text"
                            placeholder="Manufacturer"
                            value={formValues.manufacturer}
                            onChange={changeHandler}
                            required
                        ></input>
                    </div>
                    <div className="input-box">
                        <input
                            className="input"
                            name="description"
                            type="text"
                            placeholder="Description"
                            value={formValues.description}
                            onChange={changeHandler}
                            required
                        ></input>
                    </div>
                    <div className="input-box">
                        <input
                            className="image"
                            name="image"
                            type="text"
                            placeholder="Image"
                            value={formValues.image}
                            onChange={changeHandler}
                            required
                        ></input>
                    </div>
                    <div className="btndiv">
                        <button type="button" className="btn" onClick={submitForm} >Create!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}