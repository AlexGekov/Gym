import { useEffect, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"


import "./Catalog.css"


export default function Catalog() {
    
    let [posts, setPosts] = useState(undefined)

    useEffect(() => {
        async function FetchData () {
            await fetch(`http://localhost:3030/posts/catalog`)
            .then(res => res.json())
            .then(data => setPosts(Object.values(data)))
        }
        FetchData()

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                }
            })
        })

        const hiddenEls = document.querySelectorAll('.hidden')
        hiddenEls.forEach((el) => observer.observe(el))

    }, [])



    return (
        <section id="homePage">
            <div className="box">
                <div className="hidden">
                    <div className="light">
                        {posts 
                            ?
                            posts.map(post => (
                                <div key={post._id} className="post">
                                    <img className="image" src={post.image}></img>
                                    <p>{post.name}</p>
                                    <a></a>
                                    <Link to={"/posts/" +  post._id + "/details"} ><button className="btn"> Details</button></Link>
                                </div>
                            ))
                            :
                            <div>
                                <h1>No posts yet!</h1>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}