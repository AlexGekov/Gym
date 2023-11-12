const post = require("../models/post")

exports.GetAll = () => post.find().lean()

exports.Find = (Id) => post.findById(Id).lean()

exports.create = async (Data) => {
    const kindLength = 5
    const nameLength = 3
    const manufacturerLength = 4
    const descriptionLength = 10

    if (Data.kind.length <= kindLength) {
        throw new Error(`Kind should be at least ${kindLength} characters long`)
    }
    if (Data.name.length <= nameLength) {
        throw new Error(`Name should be at least ${nameLength} characters long`)
    }
    if (Data.manufacturer.length <= manufacturerLength) {
        throw new Error(`Manufacturer should be at least ${manufacturerLength} characters long`)
    }
    if (Data.description.length < descriptionLength) {
        throw new Error(`Description should be at least ${descriptionLength} characters long`)
    }
    if (!Data.image.startsWith("https://") && !Data.image.startsWith("http://")) {
        throw new Error(`Image should start with "https://" or ""http://"`)
    }

    await post.create(Data)
}

exports.Delete = (Id) => post.findByIdAndDelete(Id)

exports.Edit = (Id, Data) => post.findByIdAndUpdate(Id, Data)

// exports.Like = async (creatureId, userId) => {
//     const currcreature = await post.findById(creatureId)
//     currcreature.votes.push(userId)
//     return currcreature.save()
// }
