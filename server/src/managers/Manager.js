const post = require("../models/post")

exports.GetAll = () => post.find().lean()

exports.Find = (Id) => post.findById(Id).populate("votes").lean()

exports.create = async (Data) => await post.create(Data)

exports.Delete = (Id) => post.findByIdAndDelete(Id)

exports.Edit = (Id, Data) => post.findByIdAndUpdate(Id, Data)

// exports.Like = async (creatureId, userId) => {
//     const currcreature = await post.findById(creatureId)
//     currcreature.votes.push(userId)
//     return currcreature.save()
// }
