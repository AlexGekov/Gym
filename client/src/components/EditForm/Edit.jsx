import { useState } from "react"
import { Edit } from "../../../api/postService"

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

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitForm = async () => {
        let res = Edit(formValues)

        if (res instanceof Promise) {
            res = await res
            let data = await res.json()
            console.log(data)
            saveUserData(data)
        }

        // setFormValues(InitialFormState)
    }

    return (
        <div className="wrapper">
            <div className="light">
                <form action="POST">
                    <h1>Edit Post</h1>
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