// const animal = require("../../models/animal")

exports.GetAll = () => animal.find().lean()

exports.Find = (Id) => animal.findById(Id).populate("votes").lean()

exports.create = async (Data) => await animal.create(Data)

exports.Delete = (Id) => animal.findByIdAndDelete(Id)

exports.Edit = (Id, Data) => animal.findByIdAndUpdate(Id, Data)

// exports.Like = async (creatureId, userId) => {
//     const currcreature = await animal.findById(creatureId)
//     currcreature.votes.push(userId)
//     return currcreature.save()
// }
