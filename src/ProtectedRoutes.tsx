import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { AuthContext } from "./contexts/AuthContext"
import { Login } from "./pages/Login"


export function ProtectedRoutes(){
    const { autheticated } = useContext(AuthContext)
    return autheticated ? <Outlet/> : <Login/>
}