export default function Home() {
    return (
        <header id="header">
            <img className="img" src="/images/429d631659a11a9eb666b103d811470a.png" alt="logo"></img>
                <nav id="navbar">
                <ul className="nav_links">
                        <li><a href="/login">Sign in</a></li> 
                        <li><a href="/register">Register</a></li>
                    </ul>
                </nav>
            <div className="toggle">
                <input className="thingy" type="checkbox" id="lightmode-toggle"></input>
                <label className="switch" htmlFor="lightmode-toggle"></label>
            </div>
            <a className="contact"><button>Contact us!</button></a>
        </header>
    )
}