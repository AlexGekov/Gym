

const passwordLength = 5
const emailLength = 10
const usernameLength = 6

export function RegValidate(Data){
    if(Data.email.length <= emailLength){
        throw new Error(`Email should be at least ${emailLength} characters long`)
    }
    if (Data.username.length <= usernameLength) {
        throw new Error(`Username should be at least ${usernameLength} characters long`)
    }
    if (Data.password.length < passwordLength) {
        throw new Error(`Password should be at least ${passwordLength} characters long`)
    }
    if (Data.repeatPassword !== Data.password) {
        throw new Error(`Repeat-Password should match password!`)
    }

    let info = JSON.stringify(Data)

    return fetch(`http://localhost:3030/users/register`, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: info
    })
}


export function LogValidate(Data) {

    return fetch(`http://localhost:3030/users/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(Data)
    })
}