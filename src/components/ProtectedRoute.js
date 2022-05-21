import { useContext } from "react"
import { AuthContext } from "../context/authContext"
// Navigate es un componente que me permite redirigir
import {Navigate} from "react-router-dom"



export default function ProtectedRoute(props) {
    
    const {user}=useContext(AuthContext)

    if (user) {
        // si el usuario está logueado 
        return props.children   //el componente hijo de ProtectedRoute
    }

    // si no está logueado, no renderizo ningun componente y lo redirijo a login
    // replace--> reemplaza la ruta
    return (<Navigate to="/login" replace />)

}
