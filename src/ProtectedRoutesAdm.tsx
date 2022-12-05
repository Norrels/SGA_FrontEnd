import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./contexts/AuthContext"


export function ProtectedRoutesAdm(){
    const { autheticated, userAutheticated } = useContext(AuthContext)
    return autheticated && userAutheticated.tipoUsuario == "ADMINISTRADOR" ? <Outlet/> : <Navigate to={"/inicio"}/>
}