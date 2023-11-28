import { useEffect, useState } from "react"
import { Route,Routes } from "react-router-dom"

import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import Register from "./components/Register/Register.jsx"
import Login from "./components/Login/Login.jsx"
import CreateForm from "./components/Create/Create.jsx"
import Catalog from "./components/Catalog/Catalog.jsx"
import Details from "./components/Details/Details.jsx"
import EditForm from "./components/EditForm/Edit.jsx"
import Profile from "./components/Profile/Profile.jsx"

export default function App() {
  const [isAuth, setIsAuth] = useState(false)

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
      <Header isAuth={isAuth} setIsAuth={setIsAuth} ></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/create" element={<CreateForm />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/posts/:postId/details" element={<Details isAuth={isAuth}/>} />
        <Route path="/posts/:postId/edit" element={<EditForm />} />

      </Routes>
    </>
  )
}