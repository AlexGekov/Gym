export function Create(Data, userData) {
    Validate(Data)

    let Token = userData.authToken

    if (!Token) {
        throw new Error("You need to be logged in!")
    }

    Data.owner = userData.userId

    let info = JSON.stringify(Data)

    return fetch(`http://localhost:3030/posts/create`, {
        method: "POST",
        headers:
        {
            "Content-type": "application/json",
            "X-Authorization": Token
        },
        body: info
    })
}


export function Edit(Data, userData) {
    Validate(Data)

    let Token = userData.authToken

    if (!Token) {
        throw new Error("You need to be logged in!")
    }

    let info = JSON.stringify(Data)

    return fetch(`http://localhost:3030/posts/${Data._id}/edit`, {
        method: "PUT",
        headers:
        {
            "Content-type": "application/json",
            "X-Authorization": Token
        },
        body: info
    })
}

function Validate(Data) {
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
}