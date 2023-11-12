const router = require("express").Router()
const Manager = require("../managers/Manager")

router.get("/catalog", async (req, res) => {
    try {
        let posts = await Manager.GetAll()
        res.json(posts).end()
    } catch (err) {
        res.status(404)
    }
})


router.get("/catalog/:search", async (req, res) => {
    let search = req.params.search
    try {
        let posts = await Manager.search(search)
        res.json(posts).end()
    } catch (err) {
        res.status(404)
    }
})

router.post("/create", async (req, res) => {
    const { kind, name, manufacturer, description, image, owner } = req.body
    try {
        await Manager.create({ kind, name, manufacturer, description, image, owner })
    } catch (err) {
        res.status(404)
    }
})

router.get("/:postId/details", async (req, res) => {
    const postId = req.params.postId
    try {
        const post = await Manager.Find(postId)
        res.json(post).end()
    } catch (err) {
        res.status(404)
    }
})


router.get("/:postId/want", async (req, res) => {
    try {
        await Manager.GetWants(postId)
        res.end()
    } catch (err) {
        res.status(404)
    }
})

router.post("/:postId/want", async (req, res) => {
    const { postId, userId } = req.body
    try {
        await Manager.Want(postId, userId)
        res.end()
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
    try {
        const post = await Manager.Edit(postId, { kind, name, manufacturer, description, image })
        res.json(post).end()
    } catch (err) {
        res.status(404)
    }
})

module.exports = router
