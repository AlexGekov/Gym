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
        throw new Error(`Image should start with "https://" or "http://"`)
    }

    await post.create(Data)
}

exports.search = async (Param) => {
    let result = await post.find().lean()
    result = result.filter(post => post.name.toLowerCase().includes(Param.toLowerCase()))
    return result
}

exports.Delete = (Id) => post.findByIdAndDelete(Id)

exports.Edit = (Id, Data) => post.findByIdAndUpdate(Id, Data)

exports.Want = async (Id, userId) => {
    const curPost = await post.findById(Id)
    curPost.Want.push(userId)
    return curPost.save()
}


exports.FindPostsByUser = async (userId) => {
    let result = await post.find().lean()
    result = result.filter(post => post.owner == userId)
    return result
}

