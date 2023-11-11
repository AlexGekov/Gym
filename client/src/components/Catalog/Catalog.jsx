import { useEffect } from "react"


// import "./Login.css"
import { FindAll } from "../../../api/postService"


export default function Catalog() {
    
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


    useEffect(() => {
        async function FindAll() {
            let data = await fetch(`http://localhost:3030/posts/catalog`)
        }

    })

    return (
    <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">
                Latest Photos
            </h2>
        </div>
        <div className="row tm-mb-90 tm-gallery">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="" alt="Image" className="img-fluid"></img>
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Clocks</h2>
                            <a href="">View more</a>
                        </figcaption>
                </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">18 Oct 2020</span>
                        <span>9,906 Wants</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="" alt="Image" className="img-fluid"></img>
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Plants</h2>
                            <a href="">View more</a>
                        </figcaption>
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">14 Oct 2020</span>
                        <span>16,100 Wants</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="" alt="Image" className="img-fluid"></img>
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Morning</h2>
                            <a href="">View more</a>
                        </figcaption>
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">12 Oct 2020</span>
                    <span>12,460 Wants</span>
                </div>
            </div>
        </div>
    </div>
    )
}