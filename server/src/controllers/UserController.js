const router = require("express").Router()
const userManager = require("../managers/userManager")

router.post("/register", async (req, res) => {
    const { email, username, password, repeatPassword } = req.body;
    try {
        let [user, token] = await userManager.register(email, username, password, repeatPassword)
        res.json({
            authToken: token,
            email: user.email,
            username: user.username,
            userId: user._id
        })
    } catch (error) {
        res.status(404)
    }
})

router.get("/login", (req, res) => {
    res.render("user/login")
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await userManager.login(email, password)
        res.cookie("auth", token, { httpOnly: true })
        res.redirect("/")
    } catch (error) {
        let err = error.message
        res.render("/login", err)
    }
})


router.get("/logout", (req, res) => {
    res.clearCookie("auth")
    res.redirect("/")
})

module.exports = router