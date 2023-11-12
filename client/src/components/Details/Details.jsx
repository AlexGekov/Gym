import { useEffect, useState, } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"


import "./Details.css"


export default function Details({ isAuth }) {

    let [postDetails, setPostDetails] = useState(undefined)
    let { postId } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3030/posts/${postId}/details`)
            .then(res => res.json())
            .then(data => {
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

    }
    
    return (
        <div>
            {postDetails
                ?
                <div className="parent">
                    <h1 className="title" >{postDetails.name}</h1>
                    <img className="image" src={postDetails.image}></img>
                    <h2>Manufacturer: {postDetails.manufacturer}</h2>
                    <p>Description: {postDetails.description}</p>
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
                                    <div className="small">
                                        <button onClick={Want} className="wantBtn">Want</button>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className="small">
                                        <button className="wantBtn">Want</button>
                                    </div>
                                </div>
                            }
                            <div>
                                <p>Wants: 0</p>
                            </div>
                        </div>
                        :
                        <div>
                            <p>Wants: 0</p>
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