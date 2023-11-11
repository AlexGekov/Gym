const InitialFormState = {
    type: "",
    name: "",
    manufacturer: "",
    description: "",
    repeatPassword: ""
}


import "./Create.css"

export default function Create() {

    const [formValues, setFormValues] = useState(InitialFormState)

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitForm = async () => {


        // setFormValues(InitialFormState)
    }



    return (
        <div className="wrapper">
            <div className="light">
                <form action="POST">
                    <h1>Create Post</h1>
                    <div className="input-box">
                        <input
                            className="input"
                            name="type"
                            type="text"
                            placeholder="Type"
                            value={formValues.type}
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
                    <div className="btndiv">
                        <button type="button" className="btn" onClick={submitForm} >Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}