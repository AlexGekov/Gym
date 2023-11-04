export default function Register() {
    return (
        <div className="wrapper">
            <form action="POST">
                <h1>Register</h1>
                <div className="input-box">
                    <input className="input" name="username" type="text" placeholder="Username" required></input>
                </div>
                <div className="input-box">
                    <input className="input" name="email" type="text" placeholder="Email" required></input>
                </div>
                <div className="input-box">
                    <input className="input" name="password" type="password" placeholder="Password" required></input>
                </div>
                <div className="input-box">
                    <input className="input" name="repeatPassword" type="password" placeholder="Repeat password" required></input>
                </div>
                <div className="btndiv">
                    <button type="submit" className="btn">Register</button>
                </div>
            </form>
        </div>
    )
}