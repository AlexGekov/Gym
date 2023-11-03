export default function Register() {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input className="input" type="text" placeholder="Username" required></input>
                </div>
                <div className="input-box">
                    <input className="input" type="password" placeholder="Password" required></input>
                </div>
                <div className="input-box">
                    <input className="input" type="password" placeholder="Repeat password" required></input>
                </div>
                <div className="btndiv">
                    <button type="submit" className="btn">Register</button>
                </div>
            </form>
        </div>
    )
}