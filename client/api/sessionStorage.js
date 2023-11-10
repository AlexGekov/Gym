export function saveUserData(Data) {
    sessionStorage.setItem('auth', Data.authToken)
    sessionStorage.setItem('email', Data.email)
    sessionStorage.setItem('username', Data.username)
    sessionStorage.setItem('userId', Data.userId)
}

export function removeUserData() {
    sessionStorage.removeItem('auth')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('userId')
}

export function getUsername() {
    return sessionStorage.getItem('username')
}

export function getAuth() {
    return sessionStorage.getItem('auth')
}