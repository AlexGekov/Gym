import { createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const sessionState = sessionStorage.getItem("authToken")

        if (sessionState) {
            return JSON.parse(sessionState)
        }

        return {}
    })

    function loginRegisterHandler(data) {
        setAuth(data)
    }

    function logoutHandler() {
        setAuth({})
    }

    const values = {
        auth,
        loginRegisterHandler,
        logoutHandler
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext