import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


import "./Catalog.css"

const InitialFormState = {
    search: "",
}


export default function Catalog() {
    
    const [formValues, setFormValues] = useState(InitialFormState)
    const [posts, setPosts] = useState(undefined)

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


    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    function SearchHandler(){
        fetch(`http://localhost:3030/posts/catalog/${formValues.search}`)
        .then(res => res.json())
        .then(data => {
            if(data.length > 0 ){
                setPosts(Object.values(data))
            }else{
                setPosts(undefined)
            }
        })
    }

    return (
        <section id="homePage">
            <div className="searchbox">
                <input className="search" type="text" name="search" placeholder="Search..." value={formValues.search} onChange={changeHandler}></input>
                <button className="searchBtn" onClick={SearchHandler}>Search</button>
            </div>
            <div className="itemBox">
                <div className="hidden">
                    <div className="light">
                        {posts 
                            ?
                            posts.map(post => (
                                <div key={post._id} className="post">
                                    <img className="image" src={post.image}></img>
                                    <p>{post.name}</p>
                                    <a></a>
                                    <Link to={"/posts/" +  post._id + "/details"} ><button className="detailsBtn"> Details</button></Link>
                                </div>
                            ))
                            :
                            <h1>No posts yet!</h1>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}