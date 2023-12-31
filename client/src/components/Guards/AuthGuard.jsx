import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

export default function AuthGuard() {
    const { auth } = useContext(AuthContext)

    if (!auth.authToken){
        console.log("RouteGuard activated!")
        return <Navigate to="/login" />
    }

    return <Outlet />
}