const router = require("express").Router()
const Manager = require("../managers/Manager")

router.get("/catalog", async (req, res) => {
    try{
        let posts = await Manager.GetAll()
        res.json(posts).end()
    }catch(err){
        res.status(404)
    }
})

router.post("/create", async (req, res) => {
    const { kind, name, manufacturer, description, image, owner } = req.body
    try{
        await Manager.create({ kind, name, manufacturer, description, image, owner})
    }catch(err){
        res.status(404)
    }
})

router.get("/:postId/details", async (req, res) => {
    const postId = req.params.postId
    try{
        const post = await Manager.Find(postId)
        res.json(post).end()
    } catch (err) {
        res.status(404)
    }
})


router.delete("/:postId/details", async (req, res) => {
    const postId = req.params.postId
    try {
        const post = await Manager.Delete(postId)
        res.json(post).end()
    } catch (err) {
        res.status(404)
    }
})


router.put("/:postId/edit", async (req, res) => {
    const postId = req.params.postId
    const { kind, name, manufacturer, description, image, } = req.body
    try{
        const post = await Manager.Edit(postId, { kind, name, manufacturer, description, image})
        res.json(post).end()
    }catch(err){
        res.status(404)
    }
})

// router.post("/:postId/edit", async (req, res) => {
//     const animalId = req.params.animalId
//     const { need, name, years, image, kind, location, description } = req.body
//     try {
//         await Manager.Edit(animalId, { need, name, years, image, kind, location, description })
//     } catch (error) {
//         let err = error.message
//         res.render("edit", { err })
//     }
//     res.redirect(`/animals/${animalId}/details`)
// })

// router.get("/:animalId/delete", async (req, res) => {
//     const animalId = req.params.animalId
//     await creatureManager.Delete(animalId)
//     res.redirect("/dashboard")
// })


module.exports = router
