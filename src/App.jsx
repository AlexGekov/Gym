import { useEffect } from "react"

import Header from "./components/Header/Header"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"

export default function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    })

    const hiddenEls = document.querySelectorAll('.hidden')
    hiddenEls.forEach((el) => observer.observe(el))
  })

  return (
    <>
      {/* <Header></Header>
      <Home></Home> */}
      <Login></Login>
      {/* <Register></Register> */}
    </>
  )
}