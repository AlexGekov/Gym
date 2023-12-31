import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"


import "./Profile.css"

const InitialFormState = {
    search: "",
}


export default function Profile() {

    const { auth, loginRegisterHandler } = useContext(AuthContext)
    const [formValues, setFormValues] = useState(InitialFormState)
    const [user, SetUser] = useState(undefined)
    const [posts, setPosts] = useState(undefined)

    useEffect(() => {
        let userId = auth.userId
        FetchUserData()
        FetchAllPosts()


        async function FetchUserData() {
            await fetch(`http://localhost:3030/users/${userId}/profile`)
                .then(res => res.json())
                .then(data => SetUser(data))
        }

        async function FetchAllPosts() {
            await fetch(`http://localhost:3030/posts/${userId}/catalog`)
                .then(res => res.json())
                .then(data => {
                    if (Object.values(data).length > 0){
                        
                        setPosts(Object.values(data))
                    }else{
                        setPosts(false)
                    }
                })
        }


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

    function SearchHandler() {
        let userId = auth.userId
        fetch(`http://localhost:3030/posts/catalog/${formValues.search}/${userId}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setPosts(Object.values(data))
                } else {
                    setPosts(undefined)
                }
            })
    }

    return (
        <section id="homePage">
            {user
                ?
                <div className="UserInfo">
                    <img className="Profileimg" src="/images/pngwing.com.png" alt="logo"></img>
                    <div className="light">
                        <h1>Username: {user.username}</h1>
                        <h1>Email: {user.email}</h1>
                    </div>
                </div>
                :
                <div>
                    <p>No user!</p>
                </div>
            }

            <div className="Searchbox">
                <input className="search" type="text" name="search" placeholder="Search..." value={formValues.search} onChange={changeHandler}></input>
                <button className="searchBtn" onClick={SearchHandler}>Search</button>
            </div>
            
            <div className="Box">
                <div className="hidden">
                    <div className="light">
                        {posts
                            ?
                            posts.map(post => (
                                <div key={post._id} className="post">
                                    <img className="image" src={post.image}></img>
                                    <p>{post.name}</p>
                                    <a></a>
                                    <Link to={"/posts/" + post._id + "/details"} ><button className="detailsBtn"> Details</button></Link>
                                </div>
                            ))
                            :
                            <div className="post">
                                <h1>No posts yet!</h1>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}