const router = require("express").Router()
const userManager = require("../managers/userManager")

router.post("/register", async (req, res) => {
    const { email, usermame, password, repeatPassword } = req.body;
    try {
        console.log("here")
        await userManager.register(email, usermame, password, repeatPassword)
        const token = await userManager.login(email, password)
        res.cookie("auth", token, { httpOnly: true })
        res.redirect("/catalog")
    } catch (error) {
        let err = error.message
        res.render("user/register", { err })
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