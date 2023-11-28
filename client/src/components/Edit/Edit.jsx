import { useState, useEffect, useContext } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { Edit } from "../../../api/postService"
import AuthContext from "../../contexts/AuthContext.jsx"

const InitialFormState = {
    kind: "",
    name: "",
    manufacturer: "",
    description: "",
    image: "",
}

import "./Edit.css"

export default function EditForm() {

    const [formValues, setFormValues] = useState(InitialFormState)
    const [err, setErr] = useState(undefined)
    const { auth } = useContext(AuthContext)
    let { postId } = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:3030/posts/${postId}/details`)
            .then(res => res.json())
            .then(data => {
                setFormValues(data)
            })
    },[])

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
            res = await Edit(formValues, auth)
        } catch (error) {
            caughtErr = error.message
        }

        if (caughtErr != undefined) {
            return setErr(caughtErr)
        } else {
            setErr(undefined)
        }

        navigate("/catalog")
    }

    return (
        <div className="wrapper">
            <div className="light">
                <form action="POST">
                    <h1>Edit Post</h1>
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
                        <button type="button" className="btn" onClick={submitForm} >Edit!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}