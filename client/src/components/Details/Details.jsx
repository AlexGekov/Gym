import { useEffect, useState, } from "react"
import { useNavigate, useParams } from "react-router-dom"


import "./Details.css"


export default function Details() {

    let [postDetails, setPostDetails] = useState(undefined)
    let { postId } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3030/posts/${postId}/details`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPostDetails(data)
        })

        // const observer = new IntersectionObserver((entries) => {
        //     entries.forEach((entry) => {
        //         if (entry.isIntersecting) {
        //             entry.target.classList.add("show")
        //         }
        //     })
        // })

        // const hiddenEls = document.querySelectorAll('.hidden')
        // hiddenEls.forEach((el) => observer.observe(el))
    }, [])

    function Delete(){
        let token = sessionStorage.getItem("auth")

        fetch(`http://localhost:3030/posts/${postId}/details`, {
            method: "DELETE",
            headers: {"X-Authorization": token}
        })

        useNavigate("/catalog")
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
                    <div className="small">
                        <button onClick={Delete} className="deleteBtn">Delete</button>
                    </div>
                    <div className="small">
                        <Link to={"/posts/" + post._id + "/edit"} ><button className="editBtn">Edit</button></Link>
                    </div>
                    <div className="small">
                        <button className="wantBtn">Want</button>
                    </div>
                </div>
            :
                <div className="parent">
                    <h1>Error!</h1>
                </div>
            }
        </div>
    )
}