import { useEffect } from "react"

import "./About.css"

export default function About() {

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
        <section id="AboutPage">
            <div className="box">
                <div className="hidden">
                    <div className="light">
                        <img className="arnoldImg" src="/images/Long-Butler-09.webp"></img>
                        <h1 className="heading">Who are we</h1>
                        <p className="info light" >We're passionate about empowering your journey to peak performance. Our mission? To fuel your potential with premium supplements and top-notch equipment that elevates every workout. From boosting endurance to sculpting strength, we're your trusted ally on the path to fitness greatness. Backed by science and crafted for results, our products are designed to support your aspirations and exceed your expectations. Join us in embracing a lifestyle of vitality, strength, and wellness. Let's conquer fitness together!"</p>
                    </div>
                </div>
            </div>
        </section>
    )
}