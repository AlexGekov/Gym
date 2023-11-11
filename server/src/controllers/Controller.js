const router = require("express").Router()
const Manager = require("../managers/Manager")

router.get("/catalog", async (req,res) => {
    try{
        let posts = await Manager.GetAll()
        res.json(posts)
    }catch(err){
        res.status(404)
    }
})

router.post("/create", async (req, res) => {
    const { kind, name, manufacturer, description, image } = req.body
    const userId = req.user
    console.log(userId)
    try{
        await Manager.create({ kind, name, manufacturer, description, image, owner: userId })
    }catch(err){
        res.status(404)
    }
})

router.get("/:animalId/details", async (req, res) => {
    const animalId = req.params.animalId
    const animal = await Manager.Find(animalId)
    let isOwner = false
    let isLogged = false

    if (req.user) {
        isLogged = true

        if (req.user._id == animal.owner) {
            isOwner = true
        }

        // for (let person of creature.votes) {
        //     peopleWhoHaveVoted.push(person.email)
        //     if (person._id == req.user._id) {
        //         hasVoted = true
        //     }
        // }
    }

    res.render("details", { animal, isOwner, })
})


router.get("/post/edit", async (req, res) => {
    const animalId = req.params.animalId
    const animal = await Manager.Find(animalId)
    res.render("edit", { animal })
})

router.post("/:animalId/edit", async (req, res) => {
    const animalId = req.params.animalId
    const { need, name, years, image, kind, location, description } = req.body
    try {
        await Manager.Edit(animalId, { need, name, years, image, kind, location, description })
    } catch (error) {
        let err = error.message
        res.render("edit", { err })
    }
    res.redirect(`/animals/${animalId}/details`)
})

router.get("/:animalId/delete", async (req, res) => {
    const animalId = req.params.animalId
    await creatureManager.Delete(animalId)
    res.redirect("/dashboard")
})


module.exports = router
