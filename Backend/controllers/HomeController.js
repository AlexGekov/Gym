const router = require("express").Router()
const Manager = require("../managers/Manager")

router.get("/", (req, res) => {
    res.render("home")
})

router.get("/404", (req, res) => {
    res.render("404")
})

router.get("/catalog", async (req, res) => {
    let games = await Manager.GetAll()
    res.render("dashboard", { games })
})

// router.get("/search", async (req, res) => {
//     const { name, platform } = req.query
//     let games = await Manager.GetAll(name, platform)
//     let options = await Manager.PlatformOptions(platform)
//     res.render("search", { games, name, options })
// })

// router.get("/:creatureId/vote", async (req, res) => {
//     const creatureId = req.params.creatureId
//     await creatureManager.Vote(creatureId, req.user._id)
//     res.redirect("/:creatureId/details")
// })

module.exports = router