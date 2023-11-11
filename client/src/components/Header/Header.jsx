import { useEffect } from "react"
import Links from "./Links"

import "./Header.css"

export default function Header({isAuth, setIsAuth}) {

    useEffect(() => {
        let token = sessionStorage.getItem("auth")
        token ? setIsAuth(true) : setIsAuth(false)
    },[isAuth])

    useEffect(() => {
        let darkMode = sessionStorage.setItem("darkMode", "null")
        const darkModeToggle = document.getElementsByClassName("switch")[0]

        const enableDarkMode = () => {
            let elements = document.getElementsByClassName("light")
            document.body.classList.add("darkmode")
            sessionStorage.setItem("darkMode", "enabled")
            elements[0].classList.add("dark")
            document.getElementsByTagName("a")[0].classList.remove("light")
            elements[0].classList.add("dark")
            document.getElementsByTagName("a")[1].classList.remove("light")
            elements[0].classList.add("dark")
            if (document.getElementsByClassName("hidden")[0]) {
                document.getElementsByClassName("hidden")[0].children[0].classList.remove("light")
                elements[0].classList.add("dark")
                document.getElementsByClassName("hidden")[1].children[0].classList.remove("light")
                elements[0].classList.add("dark")
                document.getElementsByClassName("hidden")[7].children[0].classList.remove("light")
            }
        }


        const disabledDarkMode = () => {
            let elements = document.getElementsByClassName("dark")
            document.body.classList.remove("darkmode")
            sessionStorage.setItem("darkMode", "null")
            elements[0].classList.remove("dark")
            document.getElementsByTagName("a")[0].classList.add("light")
            elements[0].classList.remove("dark")
            document.getElementsByTagName("a")[1].classList.add("light")
            elements[0].classList.remove("dark")
            if (document.getElementsByClassName("hidden")[0]) {
                document.getElementsByClassName("hidden")[0].children[0].classList.add("light")
                elements[0].classList.remove("dark")
                document.getElementsByClassName("hidden")[1].children[0].classList.add("light")
                elements[0].classList.remove("dark")
                document.getElementsByClassName("hidden")[7].children[0].classList.add("light")
            }
        }

        darkModeToggle.addEventListener("click", () => {
            darkMode = sessionStorage.getItem("darkMode")
            if (darkMode !== "enabled") {
                enableDarkMode()
            } else {
                disabledDarkMode()
            }
        })
    })


    return (
        <header id="header">
            <img className="img" src="/images/429d631659a11a9eb666b103d811470a.png" alt="logo"></img>
            <nav id="navbar">
            <Links isAuth={isAuth} setIsAuth={setIsAuth}></Links>
            </nav>
            <div className="toggle">
                <input className="thingy" type="checkbox" id="lightmode-toggle"></input>
                <label className="switch" htmlFor="lightmode-toggle"></label>
            </div>
            <a className="contact"><button>Contact us!</button></a>
        </header>
    )
}