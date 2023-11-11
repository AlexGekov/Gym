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

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        let [user, token] = await userManager.login(email, password)
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


router.get("/logout", (req, res) => {
    res.end()
})

module.exports = router