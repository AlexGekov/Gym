export default function Loggin() {
    return (
        <div className="wrapper">
            <form action="POST">
                <h1>Sign in</h1>
                <div className="input-box">
                    <input className="input" type="text" placeholder="Username" required></input>
                </div>
                <div className="input-box">
                    <input className="input" type="password" placeholder="Password" required></input>
                </div>
                <div className="remember">
                    {/* <label> <input type="checkbox">Remember me</input></label> */}
                    <a id="forgor" className="text" href="">Forgot password?</a>
                </div>
                <div className="btndiv">
                    <button type="submit" className="btn">Sign in</button>
                </div>
                <div className="register">
                    <p>Don't have an account</p>
                </div>
            </form>
        </div>
    )
}