import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"

import "./Details.css"


export default function Details() {
    const { auth } = useContext(AuthContext)
    let [postDetails, setPostDetails] = useState(undefined)
    let [wants, setWants] = useState(undefined)
    let [wantsLength, setWantsLength] = useState(undefined)

    let { postId } = useParams()
    let navigate = useNavigate()
    let userId = auth.userId

    useEffect(() => {
        fetch(`http://localhost:3030/posts/${postId}/details`)
            .then(res => res.json())
            .then(data => {
                if (data.Want) {
                    setWantsLength(data.Want.length)
                    if (data.Want.includes(userId)) {
                        setWants(true)
                    }
                }
                setPostDetails(data)
            })
    }, [])

    function Delete() {
        let token = auth.authToken

        if(confirm("Do you want to delete this item?")){
            fetch(`http://localhost:3030/posts/${postId}/details`, {
                method: "DELETE",
                headers: { "X-Authorization": token }
            })
            navigate("/catalog")
        }
    }

    function Want() {
        let Token = auth.authToken

        let Data = {
            userId: auth.userId,
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
        setWantsLength(wantsLength + 1)
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
                    {auth.authToken
                        ?
                        <div>
                            {postDetails.owner == auth.userId
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
                                <h2>Wanted by {wantsLength} people</h2>
                            </div>
                        </div>
                        :
                        <div className="light">
                            <h2>Wanted by {wantsLength} people</h2>
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