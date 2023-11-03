export default function Header() {
    return (
    <section id="homePage">
        <div className="box">
                <div className="hidden">
                    <h1>Hello bodybuilders</h1>
                    <p>All the stuff you need is here!</p>
                </div>
        </div>

        <div className="box">
                <div className="hidden">
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

        <div className="box">
                <div className="hidden">
                    <h1>See you on the other side!</h1>
                    <a className="log" href="/login">Already have an account?</a>
                </div>
        </div>
    </section>
    )
}