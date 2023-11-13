import "./Home.css"

import { useEffect } from "react"

export default function Home() {

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
    }, [])

    return (
    <section id="homePage">
        <div className="box">
                <div className="hidden">
                    <div className="light">
                        <h1>Hello, athletes!</h1>
                        <p>All the stuff you need is here!</p>
                    </div>
                </div>
        </div>

        <div className="box">
                <div className="hidden">
                    <div className="light">
                        <h1>Make a profile</h1>
                        <p>Here you will see all kinds of workouts, supplemet information and more</p>
                        <div className="items">
                            <div className="logo hidden">
                                <div className="logo hidden">
                                    <img className="IMG"
                                        src="./images/biceps_strong_muscle_exercise_arm_power_fitness-512_2_150x150.webp"
                                        alt="logo">
                                    </img>
                                </div>
                                <div className="logo hidden">
                                    <img className="IMG"
                                        src="./images/Dymatize_Elite_100_Whey_Protein_2100_Grams_1_150x150.png"
                                        alt="logo">
                                    </img>
                                </div>
                                <div className="logo hidden">
                                    <img className="IMG"
                                        src="./images/tren.png"
                                        alt="logo">
                                    </img>
                                </div>
                                <div className="logo hidden">
                                    <img className="IMG"
                                        src="./images/minecraft-story-mode-pixel-art-video-games-minecraft-heart_3_150x150.png"
                                        alt="logo">
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <div className="box">
                <div className="hidden">
                    <div className="light">
                        <h1>See you on the other side!</h1>
                        <a className="log" href="/login">Already have an account?</a>
                    </div>
                </div>
        </div>

        <div className="box">
            <div className="hidden">
                <div className="light">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe className="Icomp" src="https://maps.google.com/maps?q=Fitness%201&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no"></iframe>
                            <a className="booklet" href="https://blooketjoin.org">blooket join</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}