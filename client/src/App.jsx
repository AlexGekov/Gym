import { useEffect } from "react"
import { Route,Routes } from "react-router-dom"

import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import Register from "./components/Register/Register.jsx"
import Login from "./components/Login/Login.jsx"

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
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}