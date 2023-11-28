import { createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const isAuth = sessionStorage.getItem("authToken")
        if(isAuth){
            return JSON.parse(isAuth)
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