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
      <Header></Header>
      <Home></Home>
      {/* <Login></Login> */}
      {/* <Register></Register> */}
    </>
  )
}

// function Black () {
//     document.getElementsByTagName('body')[0].style.background = '#000000'
//     document.getElementsByTagName('body')[0].style.color = '#fff'
//     document.getElementsByTagName('body')[0].style.transition = '0.3s'
//     document.getElementsByTagName('a')[0].style.color = '#fff'
//     document.getElementsByTagName('a')[1].style.color = '#fff'
//     document.getElementsByClassName('log')[0].style.color = '#fff'
//     document.getElementsByClassName("switch")[0].removeEventListener("click", Black)
//     document.getElementsByClassName("switch")[0].addEventListener("click", White)
//     document.getElementsByClassName("log")[0].addEventListener("mouseover", function () {
//         document.getElementsByClassName("log")[0].color = "#0088a9"
//     })
// }

// function White() {
//     document.getElementsByTagName('body')[0].style.background = '#fff'
//     document.getElementsByTagName('body')[0].style.color = '#000000'
//     document.getElementsByTagName('body')[0].style.transition = '0.3s'
//     document.getElementsByTagName('a')[0].style.color = '#000000'
//     document.getElementsByTagName('a')[1].style.color = '#000000'
//     document.getElementsByClassName('log')[0].style.color = '#000000'
//     document.getElementsByClassName("switch")[0].removeEventListener("click", White)
//     document.getElementsByClassName("switch")[0].addEventListener("click", Black)
//     document.getElementsByClassName("log")[0].addEventListener("mouseover", function () {
//         document.getElementsByClassName("log")[0].color = "#0088a9"
//     })
// }