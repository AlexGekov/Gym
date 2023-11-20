const router = require("express").Router()
const userManager = require("../managers/userManager")

router.post("/register", async (req, res) => {
    const { email, username, password, repeatPassword } = req.body;
    try {
        let [user, token] = await userManager.register(email, username, password, repeatPassword)
        res.json({
            authToken: token,
            userId: user._id
        })
    } catch (error) {
        res.status(404)
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password })
    try {
        let [user, token] = await userManager.login(email, password)
        res.json({
            authToken: token,
            userId: user._id
        })
    } catch (error) {
        res.status(404)
    }
})

router.get("/:userId/profile", async (req, res) => {
    const userId = req.params.userId
    try {
        let user = await userManager.FindUser(userId)
        res.json(user).end()
    } catch (error) {
        res.status(404)
    }
})


router.get("/logout", (req, res) => {
    res.end()
})

module.exports = router