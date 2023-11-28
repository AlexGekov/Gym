import { useEffect } from "react"
import Links from "./Links"
import { Link } from "react-router-dom"

import "./Header.css"

export default function Header() {

    useEffect(() => {
        let darkMode = sessionStorage.setItem("darkMode", "null")
        const darkModeToggle = document.getElementsByClassName("switch")[0]

        darkModeToggle.addEventListener("click", () => {
            darkMode = sessionStorage.getItem("darkMode")
            if (darkMode !== "enabled") {
                enableDarkMode()
            } else {
                disabledDarkMode()
            }
        })
    }, [])

    const enableDarkMode = () => {
        let elements = document.getElementsByClassName("light")
        document.body.classList.add("darkmode")
        sessionStorage.setItem("darkMode", "enabled")
        for (let el of elements) {
            el.classList.add("dark")
            el.classList.remove("ligth")
        }
    }


    const disabledDarkMode = () => {
        let elements = document.getElementsByClassName("light")
        document.body.classList.remove("darkmode")
        sessionStorage.setItem("darkMode", "null")
        for (let el of elements) {
            el.classList.add("light")
            el.classList.remove("dark")
        }
    }


    return (
        <header id="header">
            <Link to="/" ><img className="img" src="/images/logogrey.png" alt="logo"></img></Link>
            <nav id="navbar">
                <Links></Links>
            </nav>
            <div className="toggle">
                <input className="thingy" type="checkbox" id="lightmode-toggle"></input>
                <label className="switch" htmlFor="lightmode-toggle"></label>
            </div>
            <a className="contact"><button>Contact us!</button></a>
        </header>
    )
}