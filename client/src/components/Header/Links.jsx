import "./Header.css"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"
import { useContext } from "react"

export default function Links() {
    const { auth, logoutHandler } = useContext(AuthContext)

    async function logout(e) {
        e.preventDefault()
        await fetch('http://localhost:3030/users/logout')
        logoutHandler()
    }

    return (
        auth.authToken
            ?
            <div>
                <ul className="nav_links">
                    <li><Link to="/catalog" className="light" >Catalog</Link></li>
                    <li><Link to="/create" className="light" >Create</Link></li>
                    <div className="light">
                        <li><a className="logout" onClick={logout}>Logout</a></li>
                    </div>
                </ul >

                <div className="profile">
                    <Link to="/profile" ><img className="profileimg" src="/images/pngwing.com.png" alt="logo"></img></Link>
                </div>
            </div>
            :
            <ul className="nav_links">
                <li><Link to="/catalog" className="light" >Catalog</Link></li>
                <li><Link to="/login" className="light" >Sign in</Link></li>
                <li><Link to="/register" className="light" >Register</Link></li>
            </ul>
    )
}