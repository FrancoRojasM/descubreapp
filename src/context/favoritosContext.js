// (se puede usar para carrito de compras)
// 1er paso
import {useState, useEffect, createContext} from "react"
// 2do paso, crear el contexto,instanciación
export const FavoritosContext=createContext()
//  3er paso, crear un provider, no es nada mas que una función y se va a aparecer mucho a un componente

const FavoritosContextProvider=(props)=>{
    const [favoritos,setFavoritos]=useState([])
    // 4to paso, definir una funcion que haga uso de setFavoritos, pero que reciba nuevos valores para agregar y de ser necesario realice las validaciones necesarias
    const anadirAFavoritos = (lugar)=>{
        // solamente eso por ahora
        setFavoritos([...favoritos, lugar])
    }

    // useEffect para dos situaciones, cuando iniciemos nuestro contexto y tambien cuando cambiemos el contexto
    useEffect(()=>{
        const favoritosStorage=JSON.parse(localStorage.getItem("descubre_favoritos"))
        if (favoritosStorage) {
            setFavoritos(favoritosStorage)
        }
    },[])

    useEffect(( )=>{
        // validamos que si la longitud de favoritos es igual a 0 no fuerce la actualizacion en el localStorage
        if (favoritos.length===0)return
        localStorage.setItem("descubre_favoritos", JSON.stringify(favoritos))
    }, [favoritos])
 
    // ultimo paso
    return (
        <FavoritosContext.Provider value={{favoritos,anadirAFavoritos}}>
            {/* con props.children indicamos que este componente va a renderizar componentes hijos pero sin saberlo */}
        {props.children}
        </FavoritosContext.Provider>
    )
}

export default FavoritosContextProvider;


