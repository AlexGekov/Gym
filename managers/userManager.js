const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("../lib/jwt")
const { SECRET } = require("../configs/SuperSecret")

exports.register = (email, password, repeatPassword) => {
    const passwordLength = 5
    const emailLength = 10


    if (password.length < passwordLength) {
        throw new Error(`Username should be at least ${usernameLength} characters long`)
    }

    if (email.length < emailLength) {
        throw new Error(`Email should be at least ${emailLength} characters long`)
    }

    if (repeatPassword != password) {
        throw new Error(`Repeat-Password should match password!`)
    }

    User.create({ email, password })
}

exports.login = async (email, password) => {
    const user = await User.findOne({ email })

    if (!email) {
        throw new Error("Cannot find email or password")
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
        throw new Error("Cannot find email or password")
    }

    const payload = {
        _id: user._id,
        email: user.email,
    }

    const token = await jwt.sign(payload, SECRET, { expiresIn: "2d" });

    return token
}