import { useEffect, useState, } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"


import "./Details.css"


export default function Details({ isAuth }) {

    let [postDetails, setPostDetails] = useState(undefined)
    let [wants, setWants] = useState(undefined)
    let [wantsLength, setWantsLength] = useState(undefined)

    let { postId } = useParams()
    let navigate = useNavigate()
    let userId = sessionStorage.getItem("userId")

    useEffect(() => {
        fetch(`http://localhost:3030/posts/${postId}/details`)
        .then(res => res.json())
        .then(data => {
            if (data.Want){
                setWantsLength(data.Want.length)
                if (data.Want.includes(userId)) {
                    setWants(true)
                }
            }
            setPostDetails(data)
        })
    }, [])

    function Delete() {
        let token = sessionStorage.getItem("auth")

        fetch(`http://localhost:3030/posts/${postId}/details`, {
            method: "DELETE",
            headers: { "X-Authorization": token }
        })

        navigate("/catalog")
    }

    function Want(){
        let Token = sessionStorage.getItem("auth")
        let Data = {
            userId: sessionStorage.getItem("userId"),
            postId
        }

        fetch(`http://localhost:3030/posts/${postId}/want`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "X-Authorization": Token
            },
            body: JSON.stringify(Data)
        })

        setWants(true)
    }

    return (
        <div>
            {postDetails
                ?
                <div className="parent">
                    <div className="light">
                        <h1 className="title" >{postDetails.name}</h1>
                        <img className="image" src={postDetails.image}></img>
                        <h2>Manufacturer: {postDetails.manufacturer}</h2>
                        <p>Description: {postDetails.description}</p>
                    </div>
                    {isAuth
                        ?
                        <div>
                            {postDetails.owner == sessionStorage.getItem("userId")
                                ?
                                <div>
                                    <div className="small">
                                        <button onClick={Delete} className="deleteBtn">Delete</button>
                                    </div>
                                    <div className="small">
                                        <Link to={"/posts/" + postDetails._id + "/edit"} ><button className="editBtn">Edit</button></Link>
                                    </div>
                                </div>
                                :
                                <div>
                                    {wants
                                        ?
                                        <div>
                                            <p>You already want this item!</p>
                                        </div>
                                        :
                                        <div className="small">
                                            <button onClick={Want} className="wantBtn">Want</button>
                                        </div>
                                    }
                                </div>
                            }
                            <div className="light">
                                <h2>Wants: {wantsLength}</h2>
                            </div>
                        </div>
                        :
                        <div className="light">
                            <h2>Wants: {wantsLength}</h2>
                        </div>
                    }
                </div>
                :
                <div className="parent">
                    <h1>Error!</h1>
                </div>
            }
        </div>
    )
}