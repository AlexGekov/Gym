const URL = "http://localhost:3030/users"

const passwordLength = 5
const emailLength = 10
const usernameLength = 6

export default function RegValidate(Data, seterror){
    if(Data.email.length <= emailLength){
        return seterror(`Email should be at least ${emailLength} characters long`)
    } else if (Data.username.length <= emailLength) {
        return seterror(`Email should be at least ${usernameLength} characters long`)
    }else if (Data.password.length < passwordLength) {
        return seterror(`Username should be at least ${passwordLength} characters long`)
    } else if (Data.repeatPassword !== password) {
        return seterror(`Repeat-Password should match password!`)
    } else {
        seterror(undefined)
    }

    return fetch(`${URL}`, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(Data)
    })
}


export default function LogValidate(Data, seterror) {
    if (Data.email.length <= emailLength) {
        return seterror(`Email should be at least ${emailLength} characters long`)
    } else if (Data.username.length <= emailLength) {
        return seterror(`Email should be at least ${usernameLength} characters long`)
    } else if (Data.password.length < passwordLength) {
        return seterror(`Username should be at least ${passwordLength} characters long`)
    } else if (Data.repeatPassword !== password) {
        return seterror(`Repeat-Password should match password!`)
    } else {
        seterror(undefined)
    }

    return fetch(`${URL}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(Data)
    })
}